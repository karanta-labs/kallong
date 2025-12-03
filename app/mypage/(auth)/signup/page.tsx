'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Text, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useSignUp } from '@/apis/querys/auth/useSignUp';
import { AUTH_FORM_RULES } from '@/shared/common/constants';
import { SignUpForm } from '@/shared/common/types';

export default function SignUpPage() {
  const router = useRouter();
  const methods = useForm<SignUpForm>();
  const { mutate: signUp, isPending } = useSignUp();

  const onSubmit = (data: SignUpForm) => {
    signUp(data, {
      onSuccess: () => {
        router.push('/mypage/signin');
      },
      onError: (error) => {
        console.log(error);
        alert(`회원가입 실패했습니다. 다시 시도해주세요`);
      },
    });
  };

  return (
    <div className='w-full flex flex-col'>
      <Text ta='center' size='xl' fw='700'>
        회원가입
      </Text>

      <form
        className='flex flex-col w-full'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className='w-full flex flex-col gap-4 mb-8'>
          <TextInput
            label='이메일'
            type='email'
            placeholder='example@abc.com'
            {...methods.register('email', AUTH_FORM_RULES.email)}
            error={methods.formState.errors.email?.message}
            disabled={isPending}
          />
          <TextInput
            label='비밀번호'
            type='password'
            placeholder='비밀번호 (8자 이상 문자/숫자/특수문자 중 2가지 이상 입력)'
            {...methods.register('password', AUTH_FORM_RULES.password)}
            error={methods.formState.errors.password?.message}
            disabled={isPending}
          />
        </div>
        <Button
          type='submit'
          variant='filled'
          color='blue.9'
          size='lg'
          radius='md'
          disabled={isPending}
        >
          회원가입
        </Button>
      </form>

      <Link href='/mypage/signin' className='mt-5'>
        <Button variant='subtle' color='black' size='md' radius='md' p='0'>
          이미 계정이 있다면? ➡️ 로그인
        </Button>
      </Link>
    </div>
  );
}
