import { Text } from '@mantine/core';

export const Footer = () => {
  return (
    <footer
      className='
        w-full 
        max-w-[500px] 
        h-[100px] 
        bg-[#FAFAFA]
        flex 
        items-center 
        justify-center 
        mx-auto'
    >
      <Text c='black'>
        © {`${new Date().getFullYear()} `}
        <Text span fw={600} c='black'>
          Karanta{' '}
        </Text>
        all rights reserved.
      </Text>
    </footer>
  );
};
