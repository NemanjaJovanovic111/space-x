import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from '@hooks';

import {SXLoadingProps} from './types';

const SXLoading: SXLoadingProps = ({style}) => {
  const {getColor} = useTheme();
  return (
    <ActivityIndicator size="large" color={getColor('primary')} style={style} />
  );
};

export default SXLoading;
