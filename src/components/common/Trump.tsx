import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { TrumpMark, TrumpNum } from '@/types/types';

export interface TrumpProps {
  num: TrumpNum;
  mark: TrumpMark;
  size?: 'md' | 'lg';
}

const Trump: FC<TrumpProps> = (props) => {
  const { num, mark, size = 'md' } = props;
  let w;
  let h;
  switch (size) {
    case 'md':
      w = 6;
      h = 8;
      break;
    case 'lg':
      w = 8;
      h = 10;
      break;
    default:
      break;
  }
  let bg;

  switch (mark) {
    case 'h':
      bg = 'red.500';
      break;
    case 'c':
      bg = 'green.500';
      break;
    case 'd':
      bg = 'blue.500';
      break;
    case 's':
      bg = 'gray.600';
      break;
    case 'w':
      bg = 'gray.300';
      break;
    default:
      console.log('カードの色入力にエラー');
  }

  return (
    <Flex
      bg={bg}
      w={w}
      h={h}
      textColor="white"
      fontWeight="semibold"
      fontSize={size}
      justifyContent="center"
      alignItems="center"
    >
      {num}
    </Flex>
  );
};

export default Trump;
