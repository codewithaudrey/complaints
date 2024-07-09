import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Grid from '../../../components/Grid/Grid';
import options from '../../../data/options';
import Flex from '../../../components/Flex/Flex';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import WalletFeature from '../../wallet/Feature';

const Option = () => {
  return (
    <Section
      px={'md'}
      mt={{ initial: '12xl', sm: 'max' }}
    >
      <Container container={'lg'}>
        <Box
          mx={'auto'}
          spaceY={'sm'}
          maxWidth={320}
        >
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            transform={'capitalize'}
            size={{ initial: 32, sm: 56 }}
          >
            deep sync selection
          </Text>
          <Text
            as={'p'}
            align={'center'}
            color={'gray-60'}
          >
            You can also connect your wallet by selecting any of the{' '}
            <Text color={'primary-60'}>option</Text> below.
          </Text>
        </Box>

        <WalletFeature
          trigger={
            <Grid
              mt={'5xl'}
              gap={{ initial: 'xl', sm: '3xl' }}
              gridColumn={{ initial: 1, sm: 2, md: 3 }}
            >
              {options.map((option, index) => (
                <Flex
                  p={'md'}
                  gap={'lg'}
                  key={index}
                  radius={'lg'}
                  cursor={'pointer'}
                  pseudos={{ hover: { backgroundColor: 'gray-20' } }}
                >
                  <Box
                    p={'xs'}
                    radius={'max'}
                    height={'fit'}
                    backgroundColor={'gray-20'}
                  >
                    <option.icon
                      size={24}
                      className='text-gray-50'
                    />
                  </Box>
                  <Box
                    flex={'full'}
                    spaceY={'xs'}
                  >
                    <Text
                      as={'h3'}
                      size={16}
                      weight={500}
                      color={'primary-60'}
                    >
                      {option.title}
                    </Text>
                    <Text
                      as={'p'}
                      color={'gray-60'}
                    >
                      {option.body}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Grid>
          }
        />
      </Container>
    </Section>
  );
};

export default Option;
