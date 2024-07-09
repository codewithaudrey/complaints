import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';

type HeaderProps = {
  label: string;
};

const Header = ({ label }: HeaderProps) => {
  return (
    <Flex
      px={'lg'}
      py={'md'}
      borderBottom={1}
      alignItems={'center'}
      borderColor={'gray-30'}
      justifyContent={'between'}
    >
      <Text
        size={20}
        weight={500}
      >
        {label}
      </Text>
    </Flex>
  );
};

export default Header;
