'use client';

import { Text } from '@mantine/core';
import { useLookbookStore } from '@/hooks/lookbook-provider';

export default function LookbooksPage() {
  const { firstLookbook, secondLookbook } = useLookbookStore((s) => s);

  return (
    <main className='relative max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center justify-center px-20 gap-10'>
      <div className='w-full flex flex-col gap-2'>
        <Text>첫번째 룩북: {firstLookbook.name || '미입력'}</Text>
        <Text>두번째 룩북: {secondLookbook.name || '미입력'}</Text>
      </div>
    </main>
  );
}
