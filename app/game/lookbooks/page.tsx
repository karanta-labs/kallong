'use client';

import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { LookbookEditor } from '@/components/lookbook-editor';
import { useLookbookStore } from '@/hooks/lookbook-provider';

export default function LookbooksPage() {
  const { firstLookbook, secondLookbook } = useLookbookStore((s) => s);
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <main className='bg-white max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center  px-20 gap-10'>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value='first'>{firstLookbook.name || '첫번째 룩'}</Tabs.Tab>
          <Tabs.Tab value='second'>
            {secondLookbook.name || '두번째 룩'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='first' pt='md'>
          <div className='w-full border border-gray-300'>
            <div
              id='poster'
              className='relative aspect-[16/9] w-full max-w-[500px] mx-auto'
              style={{
                backgroundColor: firstLookbook.data.background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {firstLookbook.data.topUrl && (
                <img
                  src={firstLookbook.data.topUrl}
                  alt='상의'
                  className='absolute inset-0 w-full h-full object-cover'
                />
              )}
            </div>
          </div>
          <LookbookEditor target='first' />
        </Tabs.Panel>
        <Tabs.Panel value='second' pt='md'>
          <div className='border border-gray-300'>두번째</div>
          <LookbookEditor target='second' />
        </Tabs.Panel>
      </Tabs>
    </main>
  );
}
