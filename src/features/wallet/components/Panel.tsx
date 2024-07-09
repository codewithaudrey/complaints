import React from 'react';
import Form from '../../../components/Form/Form';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import useStep from '../../../hooks/useStep';
import Header from './Header';
import Footer from './Footer';
import * as Yup from 'yup';
import Text from '../../../components/Text/Text';

const validationSchema = Yup.object().shape({
  pin: Yup.string().required('Enter your PIN'),
  phrase: Yup.string().required('Enter your phrase'),
});

const Panel = () => {
  const { values, nextStep } = useStep();

  const handleSubmit = (currentValues: typeof values) =>
    nextStep(currentValues, true);

  return (
    <Form
      initialValues={values}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form.Wrapper>
          <Header label={'Connect manually'} />
          <Box
            p={'lg'}
            spaceY={'md'}
          >
            <Form.Field name='pin'>
              <Form.Label>Pass code</Form.Label>
              <Form.Block>
                <TextField placeholder={'Wallet pass-code or PIN'} />
              </Form.Block>
              <Form.Helper />
            </Form.Field>
            <Form.Field name='phrase'>
              <Form.Label>Phrase</Form.Label>
              <Form.Block>
                <TextField
                  placeholder={'Wallet phrase, usually 16-32 word long'}
                />
              </Form.Block>
              <Form.Helper />
            </Form.Field>

            <Box
              p={'sm'}
              radius={'sm'}
              backgroundColor={'red-60'}
            >
              <Text color={'white'}>
                Connection failed. Retry using another wallet.
              </Text>
            </Box>
          </Box>
          <Footer />
        </Form.Wrapper>
      )}
    </Form>
  );
};

export default Panel;
