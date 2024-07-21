import type {PropsWithChildren} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

import type {Component} from '@types';

export type ViewModelProps = {
  hasThrottle?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

type Props = PropsWithChildren<
  ViewModelProps & {
    testID?: string;
    style?: StyleProp<ViewStyle>;
  }
>;

export type SXTouchableProps = Component<Props>;
