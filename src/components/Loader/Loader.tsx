import React from 'react';
import Box from '../Box/Box';
import LoaderProvider from '../../contexts/LoaderContext';

const Loader = (props: LoaderProvider.Props) => {
  return <LoaderProvider {...props} />;
};

const Background = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
  const {
    height = 2,
    width = 80,
    backgroundColor = 'blue-60',
    ...rest
  } = props;

  return (
    <Box
      ref={ref}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...rest}
    />
  );
});

const Progress = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
  const {
    height = 'full',
    width = 'full',
    backgroundColor = 'white',
    ...rest
  } = props;

  return (
    <Box
      ref={ref}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...rest}
    />
  );
});

Loader.Background = Background;
Loader.Progress = Progress;
export default Loader;
