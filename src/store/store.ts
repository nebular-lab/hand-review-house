import { Session } from '@supabase/supabase-js';
import create from 'zustand';

import { HandReview } from '@/types/types';

type State = {
  session: Session | null;
  setSession: (payload: Session | null) => void;

  handReview: HandReview;
  updateHandReview: (payload: HandReview) => void;
  resetHandReview: () => void;
};
const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  handReview: { content: '', action: [[], [], [], []], card: [], pot: [], bb: 0, sb: 0, es: 0 },
  updateHandReview: (payload) => {
    set({
      handReview: {
        content: payload.content,
        action: payload.action,
        card: payload.card,
        pot: payload.pot,
        bb: payload.bb,
        sb: payload.sb,
        es: payload.es,
      },
    });
  },
  resetHandReview: () => {
    set({ handReview: { content: '', action: [[],[],[],[]], card: [], pot: [], bb: 0, sb: 0, es: 0 } });
  },
}));

export default useStore;
