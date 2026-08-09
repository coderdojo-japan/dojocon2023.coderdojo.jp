import { getCollection, type CollectionEntry } from 'astro:content';

import { SPONSOR_TYPES, type SponsorType } from '@/consts';

export type SponsorGroup = {
  type: SponsorType;
  label: string;
  sponsors: CollectionEntry<'sponsors'>[];
};

/**
 * スポンサーを種別ごとにまとめる。
 * 該当データがない種別は返さないので、呼び出し側で空判定をしなくてよい。
 */
export async function getSponsorGroups(types?: readonly SponsorType[]): Promise<SponsorGroup[]> {
  const all = await getCollection('sponsors');
  const sorted = all.sort((a, b) => a.data.order - b.data.order);

  return SPONSOR_TYPES.filter(({ type }) => !types || types.includes(type))
    .map(({ type, label }) => ({
      type,
      label,
      sponsors: sorted.filter((sponsor) => sponsor.data.type === type),
    }))
    .filter((group) => group.sponsors.length > 0);
}
