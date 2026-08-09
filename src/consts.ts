/**
 * サイト全体で共有する定数。
 * Jekyll 時代の `_config.yml` に相当する Single Source of Truth。
 */

export const SITE = {
  year: 2023,
  title: 'DojoCon Japan',
  subtitle: 'Be Cool',
  description:
    'DojoCon Japan は CoderDojo コミュニティのカンファレンスイベントです。CoderDojo 関係者を対象に運営ノウハウの共有や関係者同士の交流などを目的として毎年開催されています。',
  url: 'https://dojocon2023.coderdojo.jp',
  datePublished: '2023年6月11日',
  dateEvent: '2023年8月27日（日曜）',
  venue: '奈良女子大学 / 記念館',
  map: 'https://goo.gl/maps/s6SMqez8qy7aDSmN6',
  twitter: 'DojoConJapan',
  facebook: 'DojoConJapan',
  email: 'dojocon2023@coderdojo.jp',
  court: '奈良地方裁判所',
  contact: 'https://forms.gle/oMy8aA3fM8iyy8cs7',
  registration: 'https://dojocon-japan.doorkeeper.jp/events/160563',
  facebookAppId: '1750803431730303',
  googleAnalyticsId: 'G-40RZ5HKFJ0',
} as const;

/** OGP のデフォルト画像（public/ 配下の絶対パス） */
export const DEFAULT_OGP_IMAGE = `/img/${SITE.year}/ogp/1200x630_03_date.jpg`;

/** 記事一覧でサムネイル未設定のときに使う画像 */
export const DEFAULT_ARTICLE_THUMBNAIL = `/img/${SITE.year}/ogp/default.jpg`;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** ヘッダーのグローバルナビゲーション */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'TOP', href: '/#top' },
  { label: '開催概要', href: '/#outline' },
  { label: 'お知らせ', href: '/news' },
  { label: 'セッション', href: '/sessions' },
  { label: '企画', href: '/events' },
  { label: '展示', href: '/exhibition' },
  { label: '問い合わせ', href: SITE.contact, external: true },
] as const;

/** フッターのリンク */
export const FOOTER_ITEMS: readonly NavItem[] = [
  { label: '行動規範', href: '/code-of-conduct' },
  { label: 'プライバシー・ポリシー', href: '/privacy' },
  { label: 'Facebook', href: `https://www.facebook.com/${SITE.facebook}`, external: true },
  { label: 'Twitter', href: `https://twitter.com/${SITE.twitter}`, external: true },
] as const;

/** スポンサー種別。表示順もこの順に従う */
export const SPONSOR_TYPES = [
  { type: 'platinum', label: 'Platinum Sponsor' },
  { type: 'gold', label: 'Gold Sponsor' },
  { type: 'silver', label: 'Silver Sponsor' },
  { type: 'bronze', label: 'Bronze Sponsor' },
  { type: 'inkind', label: 'In-kind Sponsor' },
  { type: 'individual', label: 'Individual Sponsor' },
] as const;

export type SponsorType = (typeof SPONSOR_TYPES)[number]['type'];
