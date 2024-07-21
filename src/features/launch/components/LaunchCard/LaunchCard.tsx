import React from 'react';

import {SXText, SXTouchable} from '@components';

import styles from './styles';
import {LaunchCardProps} from './types';
import useViewModel from './useViewModel';

const LaunchCard: LaunchCardProps = ({testID, ...rest}) => {
  const {labels, cardStyle, onPressHandler} = useViewModel(rest);

  return (
    <SXTouchable
      onPress={onPressHandler}
      testID={testID}
      style={[styles.card, cardStyle]}>
      <SXText children={labels.missionName} font="H1/BOLD" />
      <SXText children={labels.rocketName} font="H2/SEMI_BOLD" />
      <SXText children={labels.rocketType} font="H3/MEDIUM" />
      <SXText children={labels.launchDate} font="H6/BOLD" />
      <SXText
        children={labels.details}
        ellipsizeMode="tail"
        style={styles.details}
      />
    </SXTouchable>
  );
};

export default LaunchCard;
