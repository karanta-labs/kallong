import Link from 'next/link';
import { Container } from '@mantine/core';
import { IoSettingsOutline as SettingIcon } from 'react-icons/io5';

export const Header = () => {
  return (
    <Container
      w={{ base: '100%', sm: 500 }}
      h='60px'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
        padding: '0px 20px',
      }}
    >
      <Link href='/setting'>
        <SettingIcon color='black' size={24} style={{ cursor: 'pointer' }} />
      </Link>
    </Container>
  );
};
