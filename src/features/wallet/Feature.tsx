import React from 'react';
import Modal from '../../components/Modal/Modal';
import Wallets from './components/Wallets';
import Panel from './components/Panel';
import Step from '../../components/Step/Step';
import Loader from './components/Connect';

type WalletFeatureProps = {
  trigger: React.ReactNode;
};

const WalletFeature = ({ trigger }: WalletFeatureProps) => {
  const steps = [<Wallets />, <Loader />, <Panel />];

  return (
    <Modal>
      <Modal.Action action={'trigger'}>{trigger}</Modal.Action>
      <Modal.Body>
        <Modal.Overlay />
        <Modal.Content>
          <Step
            steps={steps}
            initialValues={{ wallet: '', phrase: '', pin: '' }}
          />
        </Modal.Content>
      </Modal.Body>
    </Modal>
  );
};

export default WalletFeature;
