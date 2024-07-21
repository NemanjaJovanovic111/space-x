import type {Component} from '@types';

import type {Launch} from '../../repository/queries';

export type ViewModelProps = {
  data: Launch;
  onPress: (id: Launch['id']) => void;
};

type Props = ViewModelProps & {
  testID?: string;
};

export type LaunchCardProps = Component<Props>;
