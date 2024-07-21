import {ViewStyle} from 'react-native';

import type {Component} from '@types';

export type ButtonType = 'primary' | 'secondary';

export type ViewModelProps = {
  type?: ButtonType;
  disabled?: boolean;
};

type Props = ViewModelProps & {
  testID?: string;
  style?: ViewStyle;
  title: string;
  onPress: () => void;
};

export type SXButtonProps = Component<Props>;
