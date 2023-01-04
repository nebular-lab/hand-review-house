import { Button, ButtonProps, MenuButton } from '@chakra-ui/react';
import { FC } from 'react';

const ActionButton: FC<ButtonProps> = (props) => {
  return <MenuButton as={Button} {...props} />;
};

export default ActionButton;
