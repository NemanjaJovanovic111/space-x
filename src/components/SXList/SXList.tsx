import React from 'react';
import {View} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {Logger} from '@utils';

import {SXLoading} from '../SXLoading';
import {SXText} from '../SXText';
import styles from './styles';
import {SXListProps} from './types';

const SXList = <T,>({loading, error, ...rest}: SXListProps<T>) => {
  if (loading) {
    return <SXLoading />;
  }

  if (error) {
    Logger.error('Theres error with list data');
    return <SXText children="Something went wrong" color="error" />;
  }

  return (
    <View style={styles.container}>
      <FlashList {...rest} />
    </View>
  );
};

export default SXList;
