import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

import { supabase } from '@/utils/supabase';

const publicPaths = ['login', 'sign-up', 'reset-password', 'additional-register'];

type RegisterRouteGuardProps = {
  children: ReactElement;
};

const RegisterRouteGuard = ({ children }: RegisterRouteGuardProps) => {
  const router = useRouter();
  const [registered, setRegistered] = useState<boolean>(false);

  // 登録状態をチェック
  useEffect(() => {
    void registeredCheck(router.asPath);

    const hideContent = () => setRegistered(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', registeredCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', registeredCheck);
    };
  }, []);

  const registeredCheck = async(url: string) => {
    const path = url.split('/')[1];
    const session = supabase.auth.getSession();
    const user_id = (await session).data.session?.user.id;
    console.log(user_id);
    if (!publicPaths.includes(path) && !user_id) {
      try {
        const userTableData = await supabase.from('users').select('*').match({ id: user_id });
        if (userTableData.error) {
          throw userTableData.error;
        }
        console.log(userTableData);
        const { nickname } = userTableData.data[0];
        if (!nickname) {
          setRegistered(false);
          await router.push('/additional-register');
        } else {
          setRegistered(true);
        }
      } catch (error) {
        alert('エラーが発生しました。');
        setRegistered(true);
      }
    } else {
      setRegistered(true);
    }
  };

  return registered ? children : null;
};

export default RegisterRouteGuard;
