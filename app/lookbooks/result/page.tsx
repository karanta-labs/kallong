'use client';

import { useState } from 'react';
import { ActionIcon, Text } from '@mantine/core';
import { ThumbsUp } from 'lucide-react';
import { IoCopyOutline as Copy } from 'react-icons/io5';
import { IoGridOutline as Grid } from 'react-icons/io5';
import { TbCapture as Capture } from 'react-icons/tb';
import { LookbookImage } from '@/components/lookbook-image';
import { useLookbookStore } from '@/hooks/lookbook-provider';
import { useOutsideClick } from '@/hooks/useoutsideclick';

export default function ResultPage() {
  const [visible, setVisible] = useState(false);
  const { firstLookbook, secondLookbook } = useLookbookStore((s) => s);
  const buttnRef = useOutsideClick<HTMLButtonElement>(() => setVisible(false));

  const handleToggleVisible = () => setVisible((prev) => !prev);

  return (
    <main className='relative bg-white max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center pb-25 px-10'>
      <div className='flex flex-col text-center'>
        <Text size='xxl' fw='bold'>
          결과 확인
        </Text>
        <Text size='xl' fw='bold' c='red'>
          10:23
        </Text>
      </div>
      <div className='w-full flex flex-col'>
        <Text size='xl' fw='bold' className='self-end'>
          {firstLookbook.name}
        </Text>
        <LookbookImage lookbook={firstLookbook} />
        <div className='flex flex-row items-center justify-end'>
          <ActionIcon variant='transparent' size='52px' radius='xl'>
            <ThumbsUp size={32} />
          </ActionIcon>
          <Text size='xl'>123</Text>
        </div>
      </div>
      <div className='w-full flex flex-col mt-[40px]'>
        <LookbookImage lookbook={secondLookbook} />
        <div className='flex flex-row items-center justify-end'>
          <ActionIcon variant='transparent' size='52px' radius='xl'>
            <ThumbsUp size={32} />
          </ActionIcon>
          <Text size='xl'>123</Text>
        </div>
      </div>
      <div className='absolute bottom-2 right-4'>
        <div className='group relative flex flex-col-reverse items-end gap-2'>
          <ActionIcon
            variant='outline'
            size='52px'
            radius='xl'
            ref={buttnRef}
            onClick={handleToggleVisible}
          >
            <Grid size={32} />
          </ActionIcon>
          {visible && (
            <>
              <ActionIcon variant='outline' size='52px' radius='xl'>
                <Copy size={32} />
              </ActionIcon>
              <ActionIcon variant='outline' size='52px' radius='xl'>
                <Capture size={32} />
              </ActionIcon>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
