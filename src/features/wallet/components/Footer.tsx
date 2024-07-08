import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import useStep from '../../../hooks/useStep';

const Footer = () => {
  const { reset } = useStep();

  return (
    <Flex
      py={'sm'}
      px={'lg'}
      gapX={'sm'}
      borderTop={1}
      justifyContent={'end'}
      borderColor={'gray-95'}
    >
      <Modal.Action
        action={'dismiss'}
        onClick={reset}
      >
        <Button
          px={'md'}
          height={32}
          color={'gray-40'}
          type={'button'}
          backgroundColor={'transparent'}
          pseudos={{ hover: { backgroundColor: 'gray-100' } }}
        >
          Cancel
        </Button>
      </Modal.Action>
      <Button
        px={'md'}
        height={32}
        type={'submit'}
      >
        Connect
      </Button>
    </Flex>
  );
};

export default Footer;
