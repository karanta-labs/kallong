'use client';

import { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { IoCopyOutline as Copy } from 'react-icons/io5';
import { IoGridOutline as Grid } from 'react-icons/io5';
import { TbCapture as Capture } from 'react-icons/tb';
import { LookbookImage } from '@/components/lookbook-image';
import { useLookbookStore } from '@/hooks/lookbook-provider';

export default function ResultPage() {
  const [visible, setVisible] = useState(false);
  const { firstLookbook, secondLookbook } = useLookbookStore((s) => s);

  const handleToggleVisible = () => setVisible((prev) => !prev);
  //const handleOutsideClick = () => setVisible(false);

  return (
    <main className='bg-white max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center px-20 gap-10'>
      결과 확인
      <LookbookImage lookbook={firstLookbook} />
      <LookbookImage lookbook={secondLookbook} />
      <div className='absolute bottom-8 right-8'>
        <div className='group relative flex flex-col-reverse items-end gap-2'>
          <ActionIcon
            variant='outline'
            size='xl'
            radius='md'
            onClick={handleToggleVisible}
          >
            <Grid size={24} />
          </ActionIcon>
          {visible && (
            <>
              <ActionIcon variant='outline' size='xl' radius='md'>
                <Copy size={24} />
              </ActionIcon>
              <ActionIcon variant='outline' size='xl' radius='md'>
                <Capture size={24} />
              </ActionIcon>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
