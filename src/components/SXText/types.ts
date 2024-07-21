import type {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';

import {Color, Fonts} from '@theme';
import type {Component} from '@types';

export type ViewModelProps = {
  font?: Fonts;
  color?: Color;
};

type Props = TextProps &
  ViewModelProps & {
    textWrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<Omit<TextStyle, 'fontFamily' | 'fontWeight'>>;
    onPress?: () => void;
  };

export type SXTextProps = Component<Props>;
