import React, { useEffect, useState } from 'react';
import Form from '../../../components/Form/Form';
import Header from './Header';
import useStep from '../../../hooks/useStep';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Loader from '../../../components/Loader/Loader';
import Footer from './Footer';
import { TbAlertTriangleOff } from 'react-icons/tb';

const Connect = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const { values, nextStep } = useStep();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoPlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [autoPlay]);

  const handleSubmit = (currentValues: typeof values) =>
    nextStep(currentValues);

  return (
    <Form
      initialValues={values}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form.Wrapper>
          <Header label={'Connecting'} />
          <Box
            px={'lg'}
            py={'2xl'}
            spaceY={'3xl'}
          >
            {autoPlay ? (
              <Loader onLoad={autoPlay}>
                <Loader.Background>
                  <Loader.Progress className='animate--loader' />
                </Loader.Background>
              </Loader>
            ) : (
              <Box
                p={'md'}
                size={56}
                mx={'auto'}
                radius={'max'}
                backgroundColor={'red-60'}
              >
                <TbAlertTriangleOff className='text-white size-full' />
              </Box>
            )}

            <Box spaceY={'xs'}>
              <Text
                as={'h3'}
                size={18}
                align={'center'}
                weight={500}
              >
                {autoPlay ? 'Connection in progress' : 'Connection failed'}
              </Text>
              <Text
                as={'p'}
                align={'center'}
                color={'gray-60'}
              >
                {autoPlay
                  ? 'We are connecting to your wallet do not cancel out of this process'
                  : 'Unable to connect to our server. Click on connect to connect manually'}
              </Text>
            </Box>
          </Box>
          <Footer
            label={autoPlay ? 'Connecting...' : 'Continue'}
            disabled={autoPlay}
          />
        </Form.Wrapper>
      )}
    </Form>
  );
};

export default Connect;
