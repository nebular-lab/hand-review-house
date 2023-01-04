import { Button, Flex, Textarea } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import useStore from '@/store/store';
import { editHistory } from '@/utils/editingHistory';

type Inputs = {
  history: string;
};

export default function HistoryForm() {
  const { register, handleSubmit } = useForm<Inputs>();
  const handReview = useStore((state) => state.handReview);
  const updateHandReview = useStore((state) => state.updateHandReview);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { action, cards, xPot, sb, bb, pots, flopPlayers } = editHistory(data.history);
    updateHandReview({ ...handReview, action: action, card: cards, bb: bb, sb: sb, pot: pots });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="3" bg={'white'} p="2" rounded={'md'}>
          <Textarea
            placeholder="ここにハンド履歴をペーストしてください"
            bg="white"
            {...register('history', { required: true })}
          />
          <Button type="submit" colorScheme="green">
            PT4のハンド履歴から登録
          </Button>
        </Flex>
      </form>
    </>
  );
}
