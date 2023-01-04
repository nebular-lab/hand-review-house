import { DeleteIcon } from '@chakra-ui/icons';
import { Badge, Flex, Td, Tr } from '@chakra-ui/react';
import { FC } from 'react';

import Trump from '@/components/common/Trump';
import { useMutateHand } from '@/hooks/useMutateHand';
import { TrumpType } from '@/types/types';

interface TableRowProps {
  handId: string;
  Xpot: number;
  position: number[];
  cards: TrumpType[];
  tags: string[];
  date: string;
}

const TableRow: FC<TableRowProps> = (props) => {
  const { handId, Xpot, position, cards, tags, date } = props;
  const { deleteHandMutation } = useMutateHand();

  const time = new Date(date);
  const separatedDate = {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    day: time.getDay(),
  };
  const positionName = ['BTN', 'SB', 'BB', 'UTG', 'HJ', 'CO'];
  return (
    <Tr bg="white">
      <Td>{`${Xpot}bp`}</Td>
      <Td>
        <Flex gap={1}>
          {position.map((pos, index) => (
            <Badge key={index} colorScheme="green">
              {positionName[pos]}
            </Badge>
          ))}
        </Flex>
      </Td>
      <Td>
        <Flex gap="1">
          {cards.map((card, index) => {
            return <Trump key={index} mark={card.mark} num={card.num} />;
          })}
        </Flex>
      </Td>
      <Td>
        <Flex gap={1}>
          {tags.map((tag) => (
            <Badge key={tag} colorScheme="green">
              {tag}
            </Badge>
          ))}
        </Flex>
      </Td>
      <Td>{`${separatedDate.year}年${separatedDate.month}月${separatedDate.day}日`}</Td>
      <Td>
        <DeleteIcon onClick={() => deleteHandMutation.mutate(handId)}></DeleteIcon>
      </Td>
    </Tr>
  );
};

export default TableRow;
