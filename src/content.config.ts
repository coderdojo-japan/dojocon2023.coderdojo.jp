import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

/**
 * YAML の配列を Content Collections のエントリ配列に変換する。
 * file() ローダーは各エントリに `id` を要求するため、
 * `id` を持たないデータには並び順のインデックスを割り当てる。
 * あわせて元の並び順を `order` として保持する（YAML の記述順＝表示順）。
 */
function parseYamlList(text: string): Record<string, unknown>[] {
  return (parseYaml(text) as Record<string, unknown>[] | null) ?? [];
}

/** `id` を持たない YAML 配列用のローダー */
function indexedYaml(path: string) {
  return file(path, {
    parser: (text) =>
      parseYamlList(text).map((item, index) => ({ ...item, order: index, id: String(index) })),
  });
}

// 空文字・null を undefined に寄せるためのヘルパー。
// YAML では `slides:` のように値を省略した書き方が多用されている。
const blankToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((value) => (value === null || value === '' ? undefined : value), schema.optional());

/** 文字列 1 個でも配列でも受け取り、常に配列にそろえる */
const stringList = z.preprocess((value) => {
  if (value === null || value === undefined || value === '') return [];
  return Array.isArray(value) ? value : [value];
}, z.array(z.string()));

// ---------------------------------------------------------------------------
// Markdown で書かれたコンテンツ
// ---------------------------------------------------------------------------

/** お知らせ・セッション紹介などの記事（旧 `_posts/`） */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    /** 見出しに `<br>` を含む記事があるため HTML を許容する */
    title: z.string(),
    date: z.coerce.date(),
    /** news / event / session / sponsors */
    category: z.string(),
    /** 一覧のサムネイル兼 OGP 画像。`/img/...` 形式のパス */
    thumbnail: blankToUndefined(z.string()),
    /** Jekyll 時代の URL をそのまま維持するためのパス */
    permalink: z.string(),
    tags: stringList,
    time: blankToUndefined(z.string()),
    description: blankToUndefined(z.string()),
  }),
});

/** 行動規範・プライバシーポリシーなどの固定ページ（旧 `_pages/*.md`） */
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    subtitle: blankToUndefined(z.string()),
    description: blankToUndefined(z.string()),
  }),
});

// ---------------------------------------------------------------------------
// YAML で管理する参照データ（旧 `_data/`）
// ---------------------------------------------------------------------------

/** セッション一覧 */
const sessions = defineCollection({
  loader: indexedYaml('src/data/sessions.yml'),
  schema: z
    .object({
      title: z.string(),
      /** Markdown 記法を含む紹介文 */
      text: z.string(),
      tag: blankToUndefined(z.string()),
      time: blankToUndefined(z.string()),
      speaker: blankToUndefined(z.string()),
      affiliation: blankToUndefined(z.string()),
      'news-link': blankToUndefined(z.string()),
      'profile-img': blankToUndefined(z.string()),
      'profile-text': blankToUndefined(z.string()),
      'archive-link': blankToUndefined(z.string()),
      slides: blankToUndefined(z.string()),
      links: stringList,
      /** パネルディスカッション用の複数登壇者 */
      speakers: z
        .array(
          z.object({
            name: z.string(),
            affiliation: blankToUndefined(z.string()),
            role: blankToUndefined(z.string()),
            text: blankToUndefined(z.string()),
            links: stringList,
          }),
        )
        .optional(),
      order: z.number(),
    })
    // YAML のキーはハイフン区切りのため、扱いやすい名前に変換する
    .transform(
      ({
        'news-link': newsLink,
        'profile-img': profileImg,
        'profile-text': profileText,
        'archive-link': archiveLink,
        ...rest
      }) => ({ ...rest, newsLink, profileImg, profileText, archiveLink }),
    ),
});

/** 当日の企画一覧 */
const events = defineCollection({
  loader: indexedYaml('src/data/events.yml'),
  schema: z.object({
    title: z.string(),
    text: z.string(),
    img: blankToUndefined(z.string()),
    time: blankToUndefined(z.string()),
    tag: blankToUndefined(z.string()),
    url: blankToUndefined(z.string()),
    order: z.number(),
  }),
});

/** ワークショップ一覧（2023 年は未使用。データが入れば表示される） */
const workshops = defineCollection({
  loader: indexedYaml('src/data/workshops.yml'),
  schema: z.object({
    title: z.string(),
    /** must / double / それ以外は申し込み不要 */
    badge: blankToUndefined(z.string()),
    time: blankToUndefined(z.string()),
    text: z.string(),
    limit: blankToUndefined(z.number()),
    url: blankToUndefined(z.string()),
    order: z.number(),
  }),
});

/** 実行委員一覧 */
const members = defineCollection({
  loader: indexedYaml('src/data/members.yml'),
  schema: z.object({
    name: z.string(),
    site: blankToUndefined(z.string()),
    img: blankToUndefined(z.string()),
    order: z.number(),
  }),
});

/** カウントダウン配信（YouTube） */
const countdown = defineCollection({
  loader: indexedYaml('src/data/countdown.yml'),
  schema: z.object({
    title: z.string(),
    /** YouTube の動画 ID */
    video_id: z.string(),
    date: z.string(),
    order: z.number(),
  }),
});

/** スポンサー一覧 */
const sponsors = defineCollection({
  loader: file('src/data/sponsors.yml', {
    parser: (text) =>
      parseYamlList(text).map((item, index) => ({
        ...item,
        // 企業スポンサーの `id` はページ内アンカーとして使うので別名で残す
        anchor: item.id,
        order: index,
        id: String(index),
      })),
  }),
  schema: z.object({
    anchor: blankToUndefined(z.string()),
    name: z.string(),
    logo: blankToUndefined(z.string()),
    link: blankToUndefined(z.string()),
    type: z.enum(['platinum', 'gold', 'silver', 'bronze', 'inkind', 'individual']),
    /** HTML を含む紹介文 */
    message: blankToUndefined(z.string()),
    order: z.number(),
  }),
});

/** ニンジャ大博覧会の作品一覧 */
const projects = defineCollection({
  loader: file('src/data/projects.yml', {
    parser: (text) =>
      // `id` は作品番号で、そのまま `/expo/{id}` の URL になる
      parseYamlList(text).map((item, index) => ({ ...item, order: index, id: String(item.id) })),
  }),
  schema: z.object({
    title: z.string(),
    /** HTML（`<br>` やリンク）を含む説明文 */
    description: z.string(),
    tag: z.string(),
    second_tag: blankToUndefined(z.string()),
    creator: z.string(),
    /** HTML のリンクを含む所属 Dojo */
    coderdojo_at: blankToUndefined(z.string()),
    note: blankToUndefined(z.string()),
    url: z.string(),
    thumbnail: blankToUndefined(z.string()),
    /** 当日展示の有無 */
    local: blankToUndefined(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  posts,
  docs,
  sessions,
  events,
  workshops,
  members,
  countdown,
  sponsors,
  projects,
};
