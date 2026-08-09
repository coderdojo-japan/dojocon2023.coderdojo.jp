import { marked } from 'marked';

/**
 * YAML に書かれた Markdown 断片を HTML に変換する。
 * 対象はリポジトリ内のデータのみなので、生 HTML の混在を許可している。
 */
export function renderMarkdown(text: string): string {
  return marked.parse(text, { async: false, gfm: true, breaks: false });
}

/**
 * 本文中の裸の URL をリンクにする（Jekyll 版で使っていた Rinku の代替）。
 * すでに `<a>` の中にある URL は二重にリンクしない。
 */
export function autoLink(html: string): string {
  let insideAnchor = false;

  return html
    .split(/(<[^>]+>)/)
    .map((part) => {
      if (part.startsWith('<')) {
        if (/^<a\b/i.test(part)) insideAnchor = true;
        else if (/^<\/a\s*>/i.test(part)) insideAnchor = false;
        return part;
      }
      if (insideAnchor) return part;
      return part.replace(
        /https?:\/\/[^\s<>"']+/g,
        (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`,
      );
    })
    .join('');
}
