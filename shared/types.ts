export type Outfit = {
  topUrl?: string;
  bottomUrl?: string;
  shoesUrl?: string;
};

export type Lookbook = {
  name: string;
  data: Outfit;
};
