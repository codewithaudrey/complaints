import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Anchor from '../../../components/Anchor/Anchor';

const Footer = () => {
  return (
    <Section
      mt={'10xl'}
      py={'xl'}
      as={'footer'}
      backgroundColor={'gray-20'}
    >
      <Container
        px={'md'}
        container={'xl'}
      >
        <Flex
          gap={'sm'}
          alignItems={'center'}
          justifyContent={'between'}
          flexDirection={{ initial: 'column', sm: 'row' }}
        >
          <Text color={'gray-60'}>
            &copy; Sinc Inc. {new Date().getFullYear()}
          </Text>
          <Box spaceX={'lg'}>
            <Anchor to={'/'}>Terms of Service</Anchor>
            <Anchor to={'/'}>Privacy Policy</Anchor>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;
