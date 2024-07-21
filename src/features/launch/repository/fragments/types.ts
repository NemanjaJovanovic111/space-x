import {LaunchDetails, Rocket} from '../types';

export type LaunchDetailsFragment = LaunchDetails & {
  rocket: Rocket;
};
