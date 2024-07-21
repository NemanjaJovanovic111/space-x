import {LaunchDetailsFragment} from '../../fragments';
import {ID} from '../../types';

export type Launch = LaunchDetailsFragment & {
  id: ID;
};
export type GetLaunches = {
  launches: Launch[];
};
