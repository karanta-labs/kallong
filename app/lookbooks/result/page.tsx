'use client';

import { LookbookImage } from '@/components/lookbook-image';
import { useLookbookStore } from '@/hooks/lookbook-provider';

export default function ResultPage() {
  const { firstLookbook, secondLookbook } = useLookbookStore((s) => s);

  return (
    <main className='bg-white max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center px-20 gap-10'>
      결과 확인
      <LookbookImage lookbook={firstLookbook} />
      <LookbookImage lookbook={secondLookbook} />
    </main>
  );
}
