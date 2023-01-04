import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import useAuth from '@/hooks/useAuth';
import useStore from '@/store/store';

const HomePage = () => {
  const { onSignInWithGoogle, onLogout } = useAuth();
  const session = useStore((state) => state.session);
  return (
    <VStack
      w="100vw"
      minH="100vh"
      direction="column"
      justifyContent="start"
      alignItems="center"
      bg="gray.100"
      maxW="1200px"
      px="10"
      pt="10"
      gap="10"
    >
      <Heading>ハンドレビュー研究所</Heading>
      <Flex direction={'column'} gap="3">
        <Text>『ハンドレビュー研究所』はハンドレビューを便利に気持ちよく行うためのツールです。</Text>
        <Text>このサービスの具体的な機能は以下の通りです</Text>
        <Text>・PokerTracker4のハンドヒストリーからハンド履歴を登録</Text>
        <Text>・ハンドレビューの作成、公開、管理</Text>
      </Flex>
      <Text>ご利用にはGoogleアカウントによるログインが必要です。</Text>
      <Button
        colorScheme={'blue'}
        onClick={() => onSignInWithGoogle.mutate()}
        isDisabled={!(session === null)}
      >
        ログイン
      </Button>
      <Link href="/hands">
        <Button colorScheme={'blue'} isDisabled={session === null}>
          ハンド集へ
        </Button>
      </Link>
    </VStack>
  );
};

export default HomePage;
