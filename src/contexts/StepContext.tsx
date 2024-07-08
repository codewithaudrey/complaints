import { createContext, useState } from 'react';

type Values = { [key: string]: any };

type Context = {
  values: Values;
  currentStep: number;
  reset: () => void;
  nextStep: (currentValues: Values, isFinal?: boolean) => void;
  previousStep: (currentValues: Values) => void;
};

namespace StepProvider {
  export type Props = {
    steps: JSX.Element[];
    initialValues: Values;
  };
}

export const StepContext = createContext<Context | null>(null);

const StepProvider = ({ steps, initialValues }: StepProvider.Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState(initialValues);

  const nextStep = (currentValues: typeof values, isFinal?: boolean) => {
    if (!isFinal) {
      setCurrentStep(currentStep + 1);
    }
    setValues((prevValues) => ({ ...prevValues, ...currentValues }));
  };

  const previousStep = (currentValues: typeof values) => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    setValues((prevValues) => ({ ...prevValues, ...currentValues }));
  };

  const reset = () => {
    setCurrentStep(0);
    setValues(initialValues);
  };

  return (
    <StepContext.Provider
      value={{ reset, values, currentStep, nextStep, previousStep }}
    >
      {steps[currentStep]}
    </StepContext.Provider>
  );
};

export default StepProvider;
