import React from 'react';
import Form from '../../../components/Form/Form';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import useStep from '../../../hooks/useStep';
import Header from './Header';
import Footer from './Footer';

const Panel = () => {
  const { values, nextStep } = useStep();

  const handleSubmit = (values: any) => {
    nextStep(values, true);
  };

  return (
    <Form
      initialValues={values}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form.Wrapper>
          <Header label={'Connect manually'} />
          <Box
            p={'lg'}
            spaceY={'lg'}
          >
            <Form.Field name='pin'>
              <Form.Block>
                <TextField placeholder={'Wallet pass-code or PIN'} />
              </Form.Block>
              <Form.Helper />
            </Form.Field>
            <Form.Field name='phrase'>
              <Form.Block>
                <TextField
                  placeholder={'Wallet phrase, usually 16-32 word long'}
                />
              </Form.Block>
              <Form.Helper />
            </Form.Field>
          </Box>
          <Footer />
        </Form.Wrapper>
      )}
    </Form>
  );
};

export default Panel;
