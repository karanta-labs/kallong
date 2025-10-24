import { createStore } from 'zustand/vanilla';
import { Lookbook, Outfit } from '@/shared/types';

export type LookbookState = {
  firstLookbook: Lookbook;
  secondLookbook: Lookbook;
};

export type LookbookActions = {
  setFirstLookbookName: (v: string) => void;
  setSecondLookbookName: (v: string) => void;
  updateFirstLookbook: (patch: Partial<Outfit>) => void;
  updateSecondLookbook: (patch: Partial<Outfit>) => void;
  reset: () => void;
};

export type LookbookStore = LookbookState & LookbookActions;

const initialLookbook: Lookbook = {
  name: '',
  data: { background: '#FFFFFF' },
};

export const defaultLookbookInit: LookbookState = {
  firstLookbook: { ...initialLookbook },
  secondLookbook: { ...initialLookbook },
};

export const createLookbookStore = (
  init: LookbookState = defaultLookbookInit
) =>
  createStore<LookbookStore>()((set) => ({
    ...init,
    setFirstLookbookName: (v) =>
      set((s) => ({ firstLookbook: { ...s.firstLookbook, name: v } })),
    setSecondLookbookName: (v) =>
      set((s) => ({ secondLookbook: { ...s.secondLookbook, name: v } })),
    updateFirstLookbook: (patch) =>
      set((s) => ({
        firstLookbook: {
          ...s.firstLookbook,
          data: { ...s.firstLookbook.data, ...patch },
        },
      })),
    updateSecondLookbook: (patch) =>
      set((s) => ({
        secondLookbook: {
          ...s.secondLookbook,
          data: { ...s.secondLookbook.data, ...patch },
        },
      })),
    reset: () => set(() => ({ ...defaultLookbookInit })),
  }));
