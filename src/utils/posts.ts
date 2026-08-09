import { getCollection, type CollectionEntry } from 'astro:content';

/** 公開日の新しい順に並べた記事一覧 */
export async function getSortedPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
