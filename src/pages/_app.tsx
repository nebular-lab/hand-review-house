import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import LoginRouteGuard from '@/components/Layout/LoginRouteGuard';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginRouteGuard>
        {/* <RegisterRouteGuard> */}
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        {/* </RegisterRouteGuard> */}
      </LoginRouteGuard>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
