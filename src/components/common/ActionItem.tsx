import { MenuItem, MenuItemProps } from '@chakra-ui/react';
import { FC } from 'react';

const ActionItem: FC<MenuItemProps> = (props) => {
  return <MenuItem {...props} />;
};

export default ActionItem;
