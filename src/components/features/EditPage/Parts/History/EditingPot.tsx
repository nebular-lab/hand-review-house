import { Text } from '@chakra-ui/react';
import { FC } from 'react';

import useStore from '@/store/store';

interface EditingPotProps {
  street: number;
}
const EditingPot: FC<EditingPotProps> = (props) => {
  const { street } = props;
  const handReview = useStore((state) => state.handReview);

  const bb = handReview.bb;

  if (!handReview.pot[street]) return <></>;
  return <Text>{(Math.round((handReview.pot[street] / bb) * 10) / 10).toString()}BB</Text>;
};

export default EditingPot;
