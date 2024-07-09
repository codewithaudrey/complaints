import React from 'react';
import Box from '../Box/Box';
import LoaderProvider from '../../contexts/LoaderContext';
import useLoader from '../../hooks/useLoader';

const Loader = (props: LoaderProvider.Props) => {
  return <LoaderProvider {...props} />;
};

const Background = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
  const {
    style,
    height = 4,
    width = 128,
    mx = 'auto',
    radius = 'max',
    backgroundColor = 'blue-95',
    ...rest
  } = props;

  const { isLoading } = useLoader();

  const defaultStyle: React.CSSProperties = {
    overflow: 'hidden',
  };

  if (!isLoading) {
    return null;
  }

  return (
    <Box
      ref={ref}
      mx={mx}
      width={width}
      height={height}
      radius={radius}
      backgroundColor={backgroundColor}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
});

const Progress = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
  const {
    className,
    height = 'full',
    width = '8/12',
    radius = 'max',
    backgroundColor = 'blue-60',
    ...rest
  } = props;

  const { isLoading } = useLoader();

  return (
    <Box
      ref={ref}
      width={width}
      height={height}
      radius={radius}
      backgroundColor={backgroundColor}
      className={`${isLoading ? 'animate--loader' : null} ${className}`}
      {...rest}
    />
  );
});

Loader.Background = Background;
Loader.Progress = Progress;
export default Loader;
