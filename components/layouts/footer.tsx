import { Container, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <Container
      w={{ base: '100%', sm: 500 }}
      h='100px'
      bg='#FAFAFA'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text c='black'>
        © {`${new Date().getFullYear()} `}
        <Text span fw={600} c='black'>
          Karanta{' '}
        </Text>
        all rights reserved.
      </Text>
    </Container>
  );
};
