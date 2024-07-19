import React from 'react';
import Grid from '../../../components/Grid/Grid';
import wallets from '../../../data/wallets';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Form from '../../../components/Form/Form';
import useStep from '../../../hooks/useStep';
import Header from './Header';
import Footer from './Footer';
import * as Yup from 'yup';
import { TbCheck } from 'react-icons/tb';

const validationSchema = Yup.object().shape({
  wallet: Yup.string().required('Please select a wallet'),
});

const Wallets = () => {
  const { values, nextStep } = useStep();
  const handleSubmit = (data: typeof values) => {
    nextStep({ ...data });
  };

  return (
    <Form
      initialValues={values}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, values: currentValues }) => (
        <Form.Wrapper>
          <Header label={'Choose Wallet'} />
          <Grid
            py={'lg'}
            px={'lg'}
            gap={'xl'}
            gridColumn={4}
            maxHeight={320}
            style={{ overflowY: 'scroll' }}
          >
            {wallets.map((wallet, index) => (
              <Box
                p={'xs'}
                key={index}
                radius={'lg'}
                spaceY={'2xs'}
                cursor={'pointer'}
                position={'relative'}
                pseudos={{ hover: { scale: 125 } }}
                onClick={() => setFieldValue('wallet', wallet.title)}
              >
                {currentValues.wallet === wallet.title ? (
                  <TbCheck
                    size={16}
                    className={
                      'radius-max position-absolute bg-blue-60 text-white p-2xs'
                    }
                    style={{ bottom: '25px', right: '8px' }}
                  />
                ) : null}
                <img
                  src={wallet.image.url}
                  alt={`${wallet.title} logo`}
                  style={{ aspectRatio: '1/1' }}
                  className='size-64 object-fit-cover bg-primary-95 radius-max'
                />
                <Text
                  as={'h3'}
                  size={12}
                  weight={500}
                  align={'center'}
                  transform={'capitalize'}
                >
                  {wallet.title}
                </Text>
              </Box>
            ))}
          </Grid>
          <Footer label='Continue' />
        </Form.Wrapper>
      )}
    </Form>
  );
};

export default Wallets;
