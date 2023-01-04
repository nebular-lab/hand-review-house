import { Flex, Text, TextProps, Th } from '@chakra-ui/react';
import { FC } from 'react';

const TableLabel: FC<TextProps> = (props) => {
  return (
    <Th>
      <Flex>
        <Text {...props}></Text>
      </Flex>
    </Th>
  );
};

export default TableLabel;
