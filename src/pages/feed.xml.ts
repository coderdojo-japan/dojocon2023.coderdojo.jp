import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { SITE } from '@/consts';
import { getSortedPosts } from '@/utils/posts';
import { stripHtml } from '@/utils/text';

/** Jekyll 時代の jekyll-feed と同じく `/feed.xml` で配信する */
export const GET: APIRoute = async (context) => {
  const posts = (await getSortedPosts()).slice(0, 100);
  const site = context.site ?? new URL(SITE.url);

  return rss({
    title: `${SITE.title} ${SITE.year}`,
    description: SITE.description,
    site,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: stripHtml(post.data.title),
      pubDate: post.data.date,
      description: post.data.description ?? stripHtml(post.data.title),
      link: post.data.permalink,
      // Markdown 記事は本文も配信する（MDX 記事は本文を持たないので description のみ）
      content: post.rendered?.html,
    })),
    customData: '<language>ja</language>',
  });
};
