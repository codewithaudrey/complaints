import React from 'react';
import ModalProvider from '../../contexts/ModalContext';
import useModal from '../../hooks/useModal';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import Container from '../Container/Container';
import Portal from '../../lib/portal';

const Modal = (props: ModalProvider.Props) => {
  return <ModalProvider {...props} />;
};

const Action = React.forwardRef(
  (props: Box.Props & { action: 'dismiss' | 'trigger' }, ref: Box.Ref) => {
    const { onClick, action, ...rest } = props;
    const { setIsOpen } = useModal();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setIsOpen(action === 'trigger' ? true : false);
      onClick && onClick(e);
    };

    return (
      <Box
        ref={ref}
        onClick={handleClick}
        {...rest}
      />
    );
  }
);

const Body = React.forwardRef((props: Flex.Props, ref: Flex.Ref) => {
  const {
    style,
    px = 'md',
    width = 'full',
    height = 'full',
    position = 'fixed',
    alignItems = 'center',
    ...rest
  } = props;
  const { isOpen } = useModal();

  const defaultStyle: React.CSSProperties = {
    top: 0,
    zIndex: 1,
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
  };

  return Portal({
    children: (
      <Flex
        ref={ref}
        px={px}
        width={width}
        height={height}
        position={position}
        alignItems={alignItems}
        style={{ ...defaultStyle, ...style }}
        {...rest}
      />
    ),
    container: document.querySelector('#portal-container'),
  });
});

const Overlay = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
  const {
    style,
    width = 'max',
    height = 'max',
    position = 'fixed',
    ...rest
  } = props;

  const defaultStyle: React.CSSProperties = {
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <Box
      ref={ref}
      width={width}
      height={height}
      position={'fixed'}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
});

const Content = React.forwardRef(
  (props: Container.Props, ref: Container.Ref) => {
    const {
      style,
      radius = 'lg',
      container = 'xs',
      position = 'relative',
      backgroundColor = 'white',
      ...rest
    } = props;

    const defaultStyle: React.CSSProperties = {
      zIndex: 1,
      maxHeight: '48rem',
    };

    return (
      <Container
        ref={ref}
        radius={radius}
        position={position}
        container={container}
        backgroundColor={backgroundColor}
        style={{ ...defaultStyle, ...style }}
        {...rest}
      />
    );
  }
);

Modal.Body = Body;
Modal.Overlay = Overlay;
Modal.Action = Action;
Modal.Content = Content;
export default Modal;
