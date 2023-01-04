import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

import useStore from '@/store/store';

import Action from '../../../../common/Action';

interface EditingActionsProps {
  street: number;
}
const EditingActions: FC<EditingActionsProps> = (props) => {
  const { street } = props;
  const handReview = useStore((state) => state.handReview);
  const bb = handReview.bb;
  return (
    <SimpleGrid columns={4} gap={1}>
      {handReview.action[street].map((action, index) => {
        let size = (Math.round((action.size / bb) * 10) / 10).toString();
        if (action.size === 0) {
          size = '';
        }
        return (
          <Action key={index} pos={action.pos} move={action.move} size={size} canEdit={false} />
        );
      })}
    </SimpleGrid>
  );
};

export default EditingActions;
