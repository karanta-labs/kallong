import Link from 'next/link';
import { Button, Text } from '@mantine/core';

export default function Home() {
  return (
    <main className='bg-white shadow-md max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center justify-center px-20'>
      <Text>오늘 뭐 입지?</Text>
      <Link href='/game'>
        <Button variant='filled' color='blue.9' size='xl' radius='md'>
          시작하기
        </Button>
      </Link>
    </main>
  );
}
