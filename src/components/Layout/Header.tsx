import { Avatar, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useAuth from '@/hooks/useAuth';

import InsertButton from '../features/EditPage/Parts/InsertHandButton/Index';

export function Header() {
  const { onSignInWithGoogle, onLogout } = useAuth();
  const router = useRouter();

  return (
    <Flex as="header" h={14} w="full" bg="white" alignItems="center" px={8} position="fixed">
      <Link href="/hands">
        <Text fontWeight="bold">ハンドレビュー研究所</Text>
      </Link>
      <Spacer />

      <Flex alignItems="center" gap={4}>
        <Avatar size="md" />
        <Button
          onClick={() => {
            onLogout.mutate();
          }}
        >
          Log Out
        </Button>
        {router.asPath.split('/')[1] !== 'edit' ? (
          <Link href="/edit">
            <Button colorScheme="blue">新規作成</Button>
          </Link>
        ) : (
          <InsertButton />
        )}
      </Flex>
    </Flex>
  );
}
