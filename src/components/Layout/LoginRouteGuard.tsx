import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

import useStore from '@/store/store';
import { supabase } from '@/utils/supabase';

// ログインチェックを適用しないページ
const publicPaths = [''];

type LoginRouteGuardProps = {
  children: ReactElement;
};

const LoginRouteGuard = ({ children }: LoginRouteGuardProps) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean>(false);
  const session = useStore((state) => state.session);
  const setSession = useStore((state) => state.setSession);
  // ログイン状態をチェック
  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  const authCheck = async (url: string) => {
    const path = url.split('/')[1];
    const nowSession = supabase.auth.getSession();
    setSession((await nowSession).data.session);

    const user_id = (await nowSession).data.session?.user.id;

    if (!publicPaths.includes(path) && !user_id) {
      // 未ログイン状態でログインが必要なページに遷移をした場合
      setAuthorized(false);

      void router.push('/');
    } else {
      setAuthorized(true);
    }
  };

  return authorized ? children : null;
};

export default LoginRouteGuard;
