import { Container, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <Container
      w={{ base: '100%', sm: 500 }}
      h='100px'
      bg='gray.8'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text c='white'>
        © {`${new Date().getFullYear()} `}
        <Text span fw={600}>
          Karanta{' '}
        </Text>
        all rights reserved.
      </Text>
    </Container>
  );
};
