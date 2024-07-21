import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {Component} from '@types';

import {SXIcon} from '../SXIcon';
import {SXText} from '../SXText';
import styles from './styles';
import useViewModel from './useViewModel';

const SXHeader: Component = () => {
  const {backgroundColor} = useViewModel();
  return (
    <SafeAreaView style={[styles.header, {backgroundColor}]}>
      <SXIcon icon="rocket" />
      <SXText children="SPACE X" font="H2/EXTRA_BOLD" />
    </SafeAreaView>
  );
};

export default SXHeader;
