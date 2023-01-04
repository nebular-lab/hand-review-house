/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { supabase } from '@/utils/supabase';

const useAuth = () => {
  const router = useRouter();

  const onSignInWithGoogle = useMutation(
    async () => {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      await router.push('/hands');
      if (error) throw new Error(error.message);
    },
    {
      onError: (err) => {
        alert(err.message);
      },
    },
  );
  const onLogout = useMutation(
    async () => {
      const { error } = await supabase.auth.signOut();
      await router.push('/');
      if (error) throw new Error(error.message);
    },
    {
      onError: (err) => {
        alert(err.message);
      },
    },
  );

  return {
    onSignInWithGoogle,
    onLogout,
  };
};

export default useAuth;
