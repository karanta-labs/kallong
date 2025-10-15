'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextInput } from '@mantine/core';
import { useLookbookStore } from '@/hooks/lookbook-provider';

export default function GamePage() {
  const router = useRouter();
  const {
    firstLookbook,
    secondLookbook,
    setFirstLookbookName,
    setSecondLookbookName,
  } = useLookbookStore((s) => s);

  const [firstName, setFirstName] = useState(firstLookbook.name);
  const [secondName, setSecondName] = useState(secondLookbook.name);

  const handleDecorate = () => {
    setFirstLookbookName(firstName.trim());
    setSecondLookbookName(secondName.trim());
    router.push('/game/lookbooks');
  };

  return (
    <main className='relative max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center justify-center px-20 gap-10'>
      <div className='flex flex-col gap-5'>
        <TextInput
          label='첫번째 룩'
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <TextInput
          label='두번째 룩'
          value={secondName}
          onChange={(e) => setSecondName(e.currentTarget.value)}
        />
      </div>

      <Button
        onClick={handleDecorate}
        variant='filled'
        color='blue.9'
        size='xl'
        radius='md'
      >
        꾸미기
      </Button>
    </main>
  );
}
