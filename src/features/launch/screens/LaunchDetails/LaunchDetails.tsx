import React from 'react';
import {ScrollView, View} from 'react-native';

import {SXLoading, SXScreen, SXText, SXVideo} from '@components';
import type {Component} from '@types';
import {Logger} from '@utils';

import styles from './styles';
import useViewModel from './useViewModel';

const LaunchDetails: Component<
  MainNavigatorParams['LaunchDetailsScreen']
> = () => {
  const {loading, displayData, error, onPressSite} = useViewModel();

  if (loading) {
    return (
      <SXScreen style={styles.loadingWrapper}>
        <SXLoading />
      </SXScreen>
    );
  }

  if (error) {
    Logger.error('Theres error with launch details');
    return <SXText children="Something went wrong" color="error" />;
  }

  return (
    <SXScreen>
      <View style={styles.video}>
        <SXVideo uri={displayData?.video} />
      </View>
      <ScrollView bounces={false} contentContainerStyle={styles.textContainer}>
        <SXText children={displayData?.missionName} font="H1/BOLD" />
        <SXText children={displayData?.rocketName} font="H1/LIGHT" />
        <SXText children={displayData?.rocketType} font="H1/LIGHT" />
        <SXText children={displayData?.launchDate} font="H3/REGULAR" />
        <SXText
          children={displayData?.site}
          font="H3/REGULAR"
          color="secondary"
          style={styles.link}
          onPress={onPressSite}
        />
        <SXText children={displayData?.details} font="H5/REGULAR" />
      </ScrollView>
    </SXScreen>
  );
};

export default LaunchDetails;
