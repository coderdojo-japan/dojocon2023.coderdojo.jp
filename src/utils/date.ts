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

/** 記事一覧の日付表記（例: 2023.7.06） */
export function formatArticleDate(date: Date): string {
  const { year, month, day } = parts(date);
  return `${year}.${Number(month)}.${day}`;
}

/** 記事ページの日付表記（例: 2023.7.6） */
export function formatPostDate(date: Date): string {
  const { year, month, day } = parts(date);
  return `${year}.${Number(month)}.${Number(day)}`;
}

/** `<time datetime="...">` 用の ISO 8601 表記 */
export function toDateTimeAttribute(date: Date): string {
  return date.toISOString();
}
