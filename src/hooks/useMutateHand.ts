/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { EditorState } from 'lexical';
import { useRef } from 'react';
import { useMutation } from 'react-query';

import useStore from '@/store/store';
import { Database } from '@/types/supabase';
import { HandReview } from '@/types/types';
import { supabase } from '@/utils/supabase';
export const useMutateHand = () => {
  const reset = useStore((state) => state.resetHandReview);
  const session = useStore((state) => state.session);
  const editorStateRef = useRef<EditorState>();
  const createHandMutation = useMutation(
    async (hand: HandReview) => {
      const { data: handData, error } = await supabase
        .from('hands')
        .insert({
          user_id: session?.user.id,
          effective_stack: hand.es,
          bb: hand.bb,
          sb: hand.sb,
          content: JSON.stringify(editorStateRef.current),
        })
        .select();
      if (error) return;
      console.log(handData);
      const hand_id = handData[0].id;

      const insertCards: Database['public']['Tables']['hand_card']['Insert'][] = [];
      hand.card.forEach((card, index) => {
        insertCards.push({
          card_id: `${card.mark}${card.num}`,
          hand_id: hand_id,
          order: index,
        });
      });
      const { error: hand_cardErr } = await supabase.from('hand_card').insert(insertCards);
      const insertPots: Database['public']['Tables']['pots']['Insert'][] = [];
      hand.pot.forEach((pot, index) => {
        insertPots.push({
          size: pot,
          street: index,
        });
      });
      const { error: potErr } = await supabase.from('pots').insert(insertPots);
      console.log(potErr);
      const insertActions: Database['public']['Tables']['actions']['Insert'][] = [];
      hand.action.forEach((streetAction) => {
        streetAction.forEach((action) => {
          insertActions.push({
            hand_id: hand_id,
            street: action.street,
            order: action.order,
            move: action.move,
            size: action.size,
            position: action.pos,
          });
        });
      });
      const { error: actionErr } = await supabase.from('actions').insert(insertActions);
      console.log(actionErr);
    },
    {
      onSuccess: () => {
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    },
  );
  const deleteHandMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase.from('hands').delete().eq('id', id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: () => {
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    },
  );
  return { createHandMutation, deleteHandMutation };
};
