import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useMutateHand } from '@/hooks/useMutateHand';
import useStore from '@/store/store';

const InsertButton = () => {
  const handReview = useStore((state) => state.handReview);
  const { createHandMutation } = useMutateHand();
  const router = useRouter();
  const onClickInsertHand = async () => {
    await createHandMutation.mutateAsync(handReview);
    await router.push('/hands');
  };
  return (
    <Button onClick={onClickInsertHand} colorScheme="blue">
      保存
    </Button>
  );
};

export default InsertButton;
