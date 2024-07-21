import {StyleProp, ViewStyle} from 'react-native';

import {IconName} from '@icons';
import {Color} from '@theme';
import type {Component} from '@types';

export type ViewModelProps = {
  icon: IconName;
  color?: Color;
};

type Props = ViewModelProps & {
  testID?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export type SXIconProps = Component<Props>;
