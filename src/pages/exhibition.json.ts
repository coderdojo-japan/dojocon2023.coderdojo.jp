import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { SITE } from '@/consts';
import { resolveImage } from '@/utils/images';
import { stripHtml } from '@/utils/text';

/**
 * ニンジャ大博覧会の作品一覧を JSON で配信する（旧 `_pages/exhibition.json`）。
 * 外部から参照されている可能性があるため、キー構成は Jekyll 版と揃えている。
 */
export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL(SITE.url);
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

  const payload = projects.map(({ id, data }) => {
    const image = data.thumbnail
      ? resolveImage(`/images/exhibition/${data.thumbnail}`)
      : undefined;
    const thumbnailPath = typeof image === 'string' ? image : image?.src;

    return {
      id: Number(id),
      title: stripHtml(data.title),
      description: stripHtml(data.description),
      tag: stripHtml(data.tag),
      note: data.note ? stripHtml(data.note) : '',
      creator: stripHtml(data.creator),
      coderdojo_at: data.coderdojo_at ? stripHtml(data.coderdojo_at) : '',
      thumbnail: thumbnailPath ? new URL(thumbnailPath, baseUrl).href : '',
      url_internal: new URL(`/expo/${id}`, baseUrl).href,
      url_external: data.url,
    };
  });

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
