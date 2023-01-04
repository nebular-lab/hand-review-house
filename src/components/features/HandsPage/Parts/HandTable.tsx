import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

import { useQueryHands } from '@/hooks/useQueryHands';
import { TrumpType } from '@/types/types';

import TableRow from './TableRow';

const HandTable = () => {
  const headerLabels = ['Xpot', 'Position', 'Board', 'Tag', '作成日', '編集'];

  const { data } = useQueryHands();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead bg="blue.50">
          <Tr>
            {headerLabels.map((label, index) => (
              <Th key={index} w="3">
                {label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((hand) => {
            const cardList: TrumpType[] = [];
            if (hand.hand_card !== null) {
              hand.hand_card.forEach((card) => {
                cardList.push({ num: card.cards.num, mark: card.cards.mark });
              });
            }

            return (
              <TableRow
                key={hand.id}
                handId={hand.id}
                Xpot={2}
                cards={cardList}
                position={hand.flop_position || []}
                tags={hand.label || []}
                date={hand.created_at}
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HandTable;
