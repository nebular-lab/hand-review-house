import { Flex, Menu, MenuList } from '@chakra-ui/react';
import { FC } from 'react';

import ActionButton from './ActionButton';
import ActionItem from './ActionItem';

export interface ActionMenuProps {
  canEdit: boolean;
  pos: number;
  move: string;
  size: string;
}
const position = ['BTN', 'SB', 'BB', 'UTG', 'HJ', 'CO'];
const Action: FC<ActionMenuProps> = (props) => {
  const { canEdit, pos, move, size } = props;
  let bg;
  let hover;
  switch (move) {
    case 'bet':
      bg = 'orange.400';
      hover = 'orange.500';
      break;
    case 'fold':
      bg = 'gray.500';
      hover = 'gray.600';
      break;
    case 'raise':
      bg = 'orange.400';
      hover = 'orange.500';
      break;
    case 'call':
      bg = 'green.400';
      hover = 'green.500';
      break;
    case 'check':
      bg = 'green.400';
      hover = 'green.500';
      break;
    case 'allin':
      bg = 'red.500';
      hover = 'red.600';
      break;
    case '---':
      bg = 'gray.300';
      hover = 'gray.400';
      break;
    default:
      bg = 'gray.300';
      hover = 'gray.400';
  }
  const moveList = ['call', 'check', 'fold', 'bet', 'raise', 'allin', '---'];
  const posList = ['BB', 'SB', 'UTG', 'HJ', 'CO', 'BTN', '---'];
  if (canEdit)
    return (
      <Flex>
        <Menu>
          <ActionButton
            borderRightRadius={0}
            bg="gray.600"
            _hover={{ bg: 'gray.700' }}
            color="white"
            w="8"
            fontSize="sm"
          >
            {position[pos]}
          </ActionButton>
          <MenuList>
            {posList?.map((item, index) => (
              <ActionItem key={index}>{item}</ActionItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <ActionButton
            borderLeftRadius={0}
            color="white"
            bg={bg}
            _hover={{ bg: hover }}
            w="14"
            fontSize="sm"
            px=""
          >
            {`${move} ${' '}
            ${size}`}
          </ActionButton>
          <MenuList>
            {moveList?.map((item, index) => (
              <ActionItem key={index}>{item}</ActionItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    );
  else {
    return (
      <Flex>
        <Menu>
          <ActionButton
            borderRightRadius={0}
            bg="gray.600"
            _hover={{ bg: 'gray.700' }}
            color="white"
            w="16"
            fontSize="sm"
          >
            {position[pos]}
          </ActionButton>
        </Menu>
        <Menu>
          <ActionButton
            borderLeftRadius={0}
            color="white"
            bg={bg}
            _hover={{ bg: hover }}
            w="20"
            fontSize="sm"
            px=""
          >
            {`${move} ${' '}
            ${size}`}
          </ActionButton>
        </Menu>
      </Flex>
    );
  }
};

export default Action;
