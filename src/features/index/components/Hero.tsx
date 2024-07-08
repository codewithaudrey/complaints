import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Flex from '../../../components/Flex/Flex';
import WalletFeature from '../../wallet/Feature';

const Hero = () => {
  return (
    <Section
      style={{
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url(/assets/images/hero-image.jpg)',
      }}
    >
      <Box
        width={'full'}
        height={'full'}
        position={'absolute'}
        style={{
          zIndex: 0,
          top: '0rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
      <Container
        px={'md'}
        position={'relative'}
        style={{ zIndex: 1 }}
      >
        <Flex
          gapY={'2xl'}
          minHeight={'max'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <Box spaceY={'xl'}>
            <Text
              as={'h1'}
              weight={500}
              align={'center'}
              color={'gray-100'}
              size={{ initial: 40, sm: 64, md: 80 }}
            >
              One wallet. All chains.
            </Text>
            <Text
              as={'p'}
              align={'center'}
              color={'gray-80'}
            >
              We are unifying Web3 by providing best-in-class, self-custodial,
              and multichain support using modern and strong encryption that is
              not only fast but securely connects your wallet to our sync server
              to give you a better experience. All of this is made possible
              because of the blockchain cloud infrastructure powered by{' '}
              <Text color={'primary-90'}>Chain Cloud and Sequence.</Text>
            </Text>
          </Box>
          <WalletFeature trigger={<Button>Connect Wallet</Button>} />
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;
