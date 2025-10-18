export const OUTFIT_TYPES = [
  'top',
  'bottom',
  'shoes',
  'accessory',
  'background',
] as const;
export type OutfitType = (typeof OUTFIT_TYPES)[number];

export type Outfit = {
  topUrl?: string;
  bottomUrl?: string;
  shoesUrl?: string;
  accessoryUrls: string[];
  background: string;
};

export type Lookbook = {
  name: string;
  data: Outfit;
};
