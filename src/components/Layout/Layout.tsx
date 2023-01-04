import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from './Header';

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <Flex
      w="100vw"
      minH="100vh"
      direction="column"
      justifyContent="start"
      alignItems="center"
      bg="gray.100"
    >
      <Header />
      <Flex w="full" maxW="1200px" mt="16" mb="10" px="10">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
