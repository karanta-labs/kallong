'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Tabs } from '@mantine/core';
import { LookbookForm } from '@/components/lookbook-form';
import { LookbookImage } from '@/components/lookbook-image';
import { useLookbookStore } from '@/hooks/lookbook-provider';

export default function CreateLookbooksPage() {
  const router = useRouter();
  const { firstLookbook, secondLookbook } = useLookbookStore((s) => s);
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <main className='relative bg-white max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center px-20 gap-15'>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value='first'>{firstLookbook.name || '첫번째 룩'}</Tabs.Tab>
          <Tabs.Tab value='second'>
            {secondLookbook.name || '두번째 룩'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='first' pt='md'>
          <LookbookImage lookbook={firstLookbook} />
          <LookbookForm targetLookbook='first' />
        </Tabs.Panel>
        <Tabs.Panel value='second' pt='md'>
          <LookbookImage lookbook={secondLookbook} />
          <LookbookForm targetLookbook='second' />
        </Tabs.Panel>
      </Tabs>
      <Button
        variant='filled'
        color='blue.9'
        size='xl'
        radius='md'
        onClick={() => router.push('/lookbooks/result')}
      >
        저장하기
      </Button>
    </main>
  );
}
