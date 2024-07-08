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
            color={'gray-10'}
            transform={'capitalize'}
            size={{ initial: 32, sm: 56 }}
          >
            deep sync selection
          </Text>
          <Text
            as={'p'}
            align={'center'}
            color={'gray-40'}
          >
            You can also connect your wallet by selecting any of the{' '}
            <Text color={'primary-60'}>option</Text> below.
          </Text>
        </Box>

        <Grid
          mt={'5xl'}
          gap={{ initial: 'xl', sm: '3xl' }}
          gridColumn={{ initial: 1, sm: 2, md: 3 }}
        >
          {options.map((option, index) => (
            <WalletFeature
              key={index}
              trigger={
                <Flex
                  p={'md'}
                  gap={'lg'}
                  radius={'lg'}
                  cursor={'pointer'}
                  pseudos={{ hover: { backgroundColor: 'gray-95' } }}
                >
                  <option.icon
                    size={30}
                    className='radius-max bg-gray-100 text-gray-50 p-xs'
                  />
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
                      color={'gray-40'}
                    >
                      {option.body}
                    </Text>
                  </Box>
                </Flex>
              }
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Option;
