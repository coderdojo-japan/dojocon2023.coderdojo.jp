const TIME_ZONE = 'Asia/Tokyo';

function parts(date: Date) {
  // ビルド環境のタイムゾーンに影響されないよう、常に日本時間で組み立てる
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const [year, month, day] = formatter.format(date).split('-');
  return { year, month, day };
}

/** 日付表記（例: 2023.7.6）。一覧・記事ページで共通 */
export function formatDate(date: Date): string {
  const { year, month, day } = parts(date);
  return `${year}.${Number(month)}.${Number(day)}`;
}

/** `<time datetime="...">` 用の ISO 8601 表記 */
export function toDateTimeAttribute(date: Date): string {
  return date.toISOString();
}
