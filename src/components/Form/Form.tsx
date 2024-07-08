import {
  Formik,
  Form as FormWrapper,
  FormikConfig,
  FormikValues,
  FormikFormProps,
} from 'formik';
import React, { Children } from 'react';
import Box from '../Box/Box';
import FieldProvider from '../../contexts/FieldContext';
import Text from '../Text/Text';
import useField from '../../hooks/useField';
import Flex from '../Flex/Flex';

const Form = <Values extends FormikValues>(props: FormikConfig<Values>) => {
  return <Formik {...props} />;
};

const Wrapper = (props: FormikFormProps) => {
  return <FormWrapper {...props} />;
};

const Field = React.forwardRef(
  (props: Box.Props & { name: string }, ref: Box.Ref) => {
    const { name, spaceY = 'sm', ...rest } = props;

    return (
      <FieldProvider name={name}>
        <Box
          ref={ref}
          spaceY={spaceY}
          {...rest}
        />
      </FieldProvider>
    );
  }
);

const Block = React.forwardRef((props: Flex.Props, ref: Flex.Ref) => {
  const { meta } = useField();
  const {
    style,
    height = 40,
    border = 1,
    radius = 'md',
    position = 'relative',
    borderColor = 'gray-95',
    ...rest
  } = props;

  const defaultStyle: React.CSSProperties = {
    overflow: 'hidden',
  };

  return (
    <Flex
      ref={ref}
      height={height}
      border={border}
      radius={radius}
      position={position}
      style={{ ...defaultStyle, ...style }}
      borderColor={
        meta.error ? 'red-60' : meta.touched ? 'primary-60' : borderColor
      }
      {...rest}
    />
  );
});

const Label = React.forwardRef((props: Text.Props, ref: Text.Ref) => {
  const { as, ...rest } = props;

  return (
    <Text
      as={'label'}
      ref={ref}
      {...rest}
    />
  );
});

const Helper = React.forwardRef((props: Text.Props, ref: Text.Ref) => {
  const { as = 'p', size = 14, color, children, ...rest } = props;
  const { meta } = useField();

  return (
    <Text
      ref={ref}
      as={as}
      size={size}
      color={meta.error ? 'red-60' : 'gray-60'}
      {...rest}
    >
      {meta.error ? meta.error : children}
    </Text>
  );
});

Form.Block = Block;
Form.Label = Label;
Form.Field = Field;
Form.Helper = Helper;
Form.Wrapper = Wrapper;
export default Form;
