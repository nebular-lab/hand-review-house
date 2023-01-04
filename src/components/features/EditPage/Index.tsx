import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { EditorState } from 'lexical';
import { useRef } from 'react';

import Layout from '../../Layout/Layout';
import BasicInfo from './Parts/BasicInfo/Index';
import HandEditor from './Parts/Editor/Index';
import History from './Parts/History/Index';
import HistoryForm from './Parts/HistoryForm/Index';

const EditPage = () => {
  return (
    <Layout>
      <Flex direction="column" mx="auto" mt="5" gap={5}>
        <Heading fontSize={'xl'}>ハンドレビュー 編集</Heading>
        <Flex gap="3">
          <VStack gap="3">
            <BasicInfo />
            <History />
            <HandEditor />
          </VStack>
          <VStack>
            <HistoryForm />
          </VStack>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default EditPage;
