'use client';

import { Button, Text, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { FcGoogle as Google } from 'react-icons/fc';
import { useSignInWithPassword } from '@/apis/querys/auth/useSignIn';
import { useSignInWithGoogle } from '@/apis/querys/auth/useSignInGoogle';
import { Link, useRouter } from '@/i18n/navigation';
import { AUTH_FORM_RULES } from '@/shared/common/constants';
import { SignInForm } from '@/shared/common/types';

export default function SignIpPage() {
  const router = useRouter();
  const methods = useForm<SignInForm>();
  const { mutate: signIn, isPending: signInIsPending } =
    useSignInWithPassword();
  const { mutate: signInWithGoogle, isPending: signInWithGoogleIsPending } =
    useSignInWithGoogle();

  const onSubmit = (data: SignInForm) => {
    signIn(data, {
      onSuccess: (data) => {
        router.push('/');
        console.log(data);
      },
      onError: (error) => {
        //const message = handleAuthErrorMessage(error);
        console.log(error);
        alert(`로그인 실패했습니다. 다시 시도해주세요`);
      },
    });
  };

  const handleGoogleLogin = async () => {
    try {
      signInWithGoogle();
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <Text ta='center' size='xl' fw='700'>
        로그인
      </Text>
      <form
        className='flex flex-col w-full'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className='w-full flex flex-col gap-2 mb-8'>
          <TextInput
            label='이메일'
            type='email'
            placeholder='example@abc.com'
            {...methods.register('email', AUTH_FORM_RULES.email)}
            error={methods.formState.errors.email?.message}
            disabled={signInIsPending || signInWithGoogleIsPending}
          />
          <TextInput
            label='비밀번호'
            type='password'
            placeholder='비밀번호 (8자 이상 문자/숫자/특수문자 중 2가지 이상 입력)'
            {...methods.register('password', AUTH_FORM_RULES.password)}
            error={methods.formState.errors.password?.message}
            disabled={signInIsPending || signInWithGoogleIsPending}
          />
        </div>
        <Button
          type='submit'
          variant='filled'
          color='blue.9'
          size='lg'
          radius='md'
          disabled={signInIsPending || signInWithGoogleIsPending}
        >
          로그인
        </Button>
      </form>

      <div className='flex flex-col mt-8 gap-5'>
        <Button
          leftSection={<Google size={14} />}
          variant='outline'
          size='lg'
          radius='md'
          color='black'
          onClick={handleGoogleLogin}
          disabled={signInIsPending || signInWithGoogleIsPending}
        >
          Continue with Google
        </Button>
        <div className='flex flex-col gap-1'>
          <Link href='/mypage/signup'>계정이 없다면? ➡️ 회원가입</Link>
          <Link href='/mypage/password/reset'>비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
}
