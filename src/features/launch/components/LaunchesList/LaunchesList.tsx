import React, {memo} from 'react';

import {SXList} from '@components';
import {Component} from '@types';

import type {Launch} from '../../repository/queries';
import {LaunchCard} from '../LaunchCard';
import styles from './styles';
import useViewModel from './useViewModel';

const LaunchesList: Component = () => {
  const {launches, loading, error, refetch, onLaunchPress} = useViewModel();

  const renderItem = ({item}: {item: Launch}) => {
    return <LaunchCard data={item} onPress={onLaunchPress} />;
  };

  return (
    <SXList<Launch>
      data={launches}
      keyExtractor={item => item?.id!}
      loading={loading}
      error={error}
      contentContainerStyle={styles.contentContainer}
      refreshing={loading}
      onRefresh={refetch}
      removeClippedSubviews
      renderItem={renderItem}
      estimatedItemSize={200}
    />
  );
};

export default memo(LaunchesList);
