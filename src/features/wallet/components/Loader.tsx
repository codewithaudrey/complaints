import React from 'react';
import Form from '../../../components/Form/Form';
import Header from './Header';
import useStep from '../../../hooks/useStep';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Footer from './Footer';

const Loader = () => {
  const { values, nextStep } = useStep();

  const handleSubmit = (currentValues: any) => {
    nextStep(currentValues);
  };

  return (
    <Form
      initialValues={values}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form.Wrapper>
          <Header label={'Connecting'} />
          <Box
            p={'lg'}
            spaceY={'xs'}
          >
            <Text
              as={'h3'}
              size={18}
              align={'center'}
              weight={500}
            >
              Connection in progress
            </Text>
            <Text
              as={'p'}
              align={'center'}
              color={'gray-40'}
            >
              We are connecting to your wallet do not cancel out of this process
            </Text>
          </Box>
          <Footer />
        </Form.Wrapper>
      )}
    </Form>
  );
};

export default Loader;
