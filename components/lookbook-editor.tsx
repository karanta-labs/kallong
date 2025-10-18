'use client';

import { useRef, useState } from 'react';
import { Button, ColorPicker, Popover, Tabs, Text } from '@mantine/core';
import { useLookbookStore } from '@/hooks/lookbook-provider';
import { OUTFIT_TYPES, OutfitType } from '@/shared/types';

type Props = { target: 'first' | 'second' };

export const LookbookEditor = ({ target }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<OutfitType | null>('top');
  const {
    firstLookbook,
    secondLookbook,
    updateFirstLookbook,
    updateSecondLookbook,
  } = useLookbookStore((s) => s);

  const lookbook = target === 'first' ? firstLookbook : secondLookbook;
  const background = lookbook.data.background;

  const setBackgroundColor = (color: string) => {
    if (target === 'first') updateFirstLookbook({ background: color });
    else updateSecondLookbook({ background: color });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        if (target === 'first') {
          updateFirstLookbook({ topUrl: imageUrl });
        } else {
          updateSecondLookbook({ topUrl: imageUrl });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    if (target === 'first') {
      updateFirstLookbook({ topUrl: undefined });
    } else {
      updateSecondLookbook({ topUrl: undefined });
    }
  };

  const handleTabChange = (value: string | null) => {
    if (value === null) return setActiveTab(null);

    if (OUTFIT_TYPES.includes(value as OutfitType)) {
      setActiveTab(value as OutfitType);
    }
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange}>
      <Tabs.List>
        <Tabs.Tab value='top'>
          <Text>상의</Text>
        </Tabs.Tab>
        <Tabs.Tab value='bottom'>
          <Text>하의</Text>
        </Tabs.Tab>
        <Tabs.Tab value='shoes'>
          <Text>신발</Text>
        </Tabs.Tab>
        <Tabs.Tab value='accessory'>
          <Text>악세사리</Text>
        </Tabs.Tab>
        <Tabs.Tab value='background'>
          <Text>배경</Text>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='top' pt='md'>
        <div className='flex flex-1 flex-col items-center gap-2'>
          <Text>상의를 추가해보세요!</Text>
          <div className='flex flex-row gap-2'>
            <input
              type='file'
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept='image/*'
              className='hidden'
            />
            <Button
              variant='outline'
              size='md'
              onClick={() => fileInputRef.current?.click()}
              //className='px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md'
            >
              추가
            </Button>
            <Button
              variant='outline'
              size='md'
              onClick={handleImageRemove}
              //className='px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md'
            >
              제거
            </Button>
          </div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value='bottom' pt='md'>
        <div className='border border-gray-300'>하의</div>
      </Tabs.Panel>
      <Tabs.Panel value='shoes' pt='md'>
        <div className='border border-gray-300'>신발</div>
      </Tabs.Panel>
      <Tabs.Panel value='accessory' pt='md'>
        <div className='border border-gray-300'>악세사리</div>
      </Tabs.Panel>
      <Tabs.Panel value='background' pt='md'>
        <div className='flex flex-1 flex-col items-center gap-2'>
          <Text>배경색을 선택하세요.</Text>
          <div className='flex flex-col items-center gap-2'>
            <Text>배경색</Text>
            <div className='flex items-center space-x-4'>
              <Popover
                width={320}
                position='bottom'
                withArrow
                shadow='md'
                trapFocus
              >
                <Popover.Target>
                  <div
                    role='button'
                    aria-label='배경색 선택'
                    className='h-8 w-8 cursor-pointer rounded-full border border-gray-300'
                    style={{ backgroundColor: background }}
                  />
                </Popover.Target>

                <Popover.Dropdown>
                  <ColorPicker
                    value={background}
                    onChange={setBackgroundColor}
                    withPicker
                    format='hex'
                  />
                </Popover.Dropdown>
              </Popover>
            </div>
          </div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
};
