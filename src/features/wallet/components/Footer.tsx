import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import useStep from '../../../hooks/useStep';

type FooterProps = {
  label?: string;
  disabled?: boolean;
};

const Footer = ({ label, disabled }: FooterProps) => {
  const { reset } = useStep();

  return (
    <Flex
      py={'sm'}
      px={'lg'}
      gapX={'sm'}
      borderTop={1}
      justifyContent={'end'}
      borderColor={'gray-30'}
    >
      <Modal.Action
        action={'dismiss'}
        onClick={reset}
      >
        <Button
          px={'md'}
          height={32}
          type={'button'}
          color={'gray-60'}
          backgroundColor={'transparent'}
          pseudos={{ hover: { backgroundColor: 'gray-30' } }}
        >
          Cancel
        </Button>
      </Modal.Action>
      <Button
        px={'md'}
        height={32}
        type={'submit'}
        disabled={disabled ? disabled : false}
      >
        {label ? label : 'Connect'}
      </Button>
    </Flex>
  );
};

export default Footer;
