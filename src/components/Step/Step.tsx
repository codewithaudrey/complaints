import React from 'react';
import StepProvider from '../../contexts/StepContext';

const Step = (props: StepProvider.Props) => {
  return <StepProvider {...props} />;
};

export default Step;
