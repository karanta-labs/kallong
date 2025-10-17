'use client';

import { useState } from 'react';
import { Tabs, Text } from '@mantine/core';
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
          <div className='text-center'>
            <Text size='lg' fw={600}>
              첫번째 룩북
            </Text>
            <Text size='sm' c='dimmed'>
              이름: {firstLookbook.name || '미입력'}
            </Text>
            {/* 첫번째 룩북의 의상 데이터 표시 */}
            {firstLookbook.data.topUrl && (
              <Text size='sm'>상의: {firstLookbook.data.topUrl}</Text>
            )}
            {firstLookbook.data.bottomUrl && (
              <Text size='sm'>하의: {firstLookbook.data.bottomUrl}</Text>
            )}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value='second' pt='md'>
          <div className='text-center'>
            <Text size='lg' fw={600}>
              두번째 룩북
            </Text>
            <Text size='sm' c='dimmed'>
              이름: {secondLookbook.name || '미입력'}
            </Text>
            {/* 두번째 룩북의 의상 데이터 표시 */}
            {secondLookbook.data.topUrl && (
              <Text size='sm'>상의: {secondLookbook.data.topUrl}</Text>
            )}
            {secondLookbook.data.bottomUrl && (
              <Text size='sm'>하의: {secondLookbook.data.bottomUrl}</Text>
            )}
          </div>
        </Tabs.Panel>
      </Tabs>
    </main>
  );
}
