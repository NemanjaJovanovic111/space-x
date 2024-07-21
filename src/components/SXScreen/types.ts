import type {PropsWithChildren} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import type {Edge} from 'react-native-safe-area-context';

import {Component} from '@types';

type Props = PropsWithChildren<{
  edges?: readonly Edge[];
  style?: StyleProp<ViewStyle>;
}>;

export type SXScreenProps = Component<Props>;
