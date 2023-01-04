/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { supabase } from '@/utils/supabase';

import type { NextPage } from 'next';

interface GoogleSignUpFormInput {
  name: string;
}

const AdditionalRegister: NextPage = () => {
  const router = useRouter();
  const user = supabase.auth.getUser();
  const [userName, setUserName] = useState<string>('');

  const { register, handleSubmit } = useForm<GoogleSignUpFormInput>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<GoogleSignUpFormInput> = async (data) => {
    const { name } = data;
    try {
      const { error } = await supabase
        .from('users')
        .update([{ user_name: name }])
        .match({ id: (await user).data.user?.id });
      if (error) {
        console.log(error);
        throw error;
      }
      setUserName(name);
    } catch (error) {
      // alert('エラーが発生しました。');
    }
  };

  useEffect(() => {
    if (userName !== null) {
      void router.push('/');
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        氏名 : <input {...register('name', { required: true })} />
      </label>

      <button type="submit">登録</button>
      <button onClick={() => router.push('/login')}>ログイン画面へ</button>
    </form>
  );
};

export default AdditionalRegister;
