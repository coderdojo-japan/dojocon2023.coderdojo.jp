/**
 * タイトルなどに含まれる HTML タグを取り除く。
 * `<title>` や OGP のメタ情報など、タグを解釈しない場所で使う。
 */
export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '');
}

/**
 * リンクの表示用にスキームを落とす。
 * 例: `https://example.com/` -> `example.com/`
 */
export function stripScheme(url: string): string {
  return url.replace(/^https?:\/\//, '');
}
