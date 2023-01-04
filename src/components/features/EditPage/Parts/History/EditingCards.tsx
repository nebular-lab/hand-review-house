import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import useStore from '@/store/store';

import Trump, { TrumpProps } from '../../../../common/Trump';

interface CardProps {
  street: number;
}
const Cards: FC<CardProps> = (props) => {
  const { street } = props;
  const handReview = useStore((state) => state.handReview);
  const card: TrumpProps[] = handReview.card;
  switch (street) {
    case 0:
      return <></>;
    case 1:
      if (card.length >= 3) {
        return (
          <Flex gap={1}>
            <Trump mark={card[0].mark} num={card[0].num} />
            <Trump mark={card[1].mark} num={card[1].num} />
            <Trump mark={card[2].mark} num={card[2].num} />
          </Flex>
        );
      }
      return <></>;
    case 2:
      if (card.length >= 4) {
        return (
          <Flex gap={1}>
            <Trump mark={card[3].mark} num={card[0].num} />
          </Flex>
        );
      }
      return <></>;
    case 3:
      if (card.length >= 5) {
        return (
          <Flex gap={1}>
            <Trump mark={card[4].mark} num={card[0].num} />
          </Flex>
        );
      }
      return <></>;
    default:
      return <></>;
  }
};

export default Cards;
