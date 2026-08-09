import type { ImageMetadata } from 'astro';

/**
 * `src/assets/img/` 配下の画像を、ビルド時に一括で読み込んでおく。
 * ここで読み込むのは画像そのものではなくメタデータ（パス・幅・高さ・形式）だけ。
 */
const assets = import.meta.glob<{ default: ImageMetadata }>(
  // 大文字の拡張子（`.PNG` など）で登録された画像もあるため両方を対象にする
  '/src/assets/img/**/*.{jpeg,jpg,png,gif,webp,avif,svg,JPEG,JPG,PNG,GIF,WEBP,AVIF,SVG}',
  { eager: true },
);

/**
 * YAML やフロントマターに書かれた `/img/...` 形式のパスを画像に解決する。
 *
 * - `src/assets` にあれば `ImageMetadata` を返す（`<Image />` で最適化できる）
 * - `public/` にしかないもの（favicon・OGP 画像など）は文字列のまま返す
 */
export function resolveImage(path: string | undefined | null): ImageMetadata | string | undefined {
  if (!path) return undefined;
  if (!path.startsWith('/img/')) return path;
  return assets[`/src/assets${path}`]?.default ?? path;
}

/**
 * OGP や RSS で使う絶対 URL を作る。
 * 最適化済み画像の場合はビルド後の実際の URL を使う。
 */
export function toAbsoluteUrl(src: ImageMetadata | string, site: URL | string): string {
  const path = typeof src === 'string' ? src : src.src;
  return new URL(path, site).href;
}
