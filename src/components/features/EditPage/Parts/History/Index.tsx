import { Flex } from '@chakra-ui/react';

import useStore from '@/store/store';

import StreetAction from './StreetHistory';

const History = () => {
  const indexes = [0, 1, 2, 3];
  const handReview = useStore((state) => state.handReview);
  console.log(handReview);
  return (
    <Flex direction="column" gap={2} w="full" bg="white">
      {indexes.map((index) => (
        <StreetAction key={index} streetIndex={index} />
      ))}
    </Flex>
  );
};

export default History;
