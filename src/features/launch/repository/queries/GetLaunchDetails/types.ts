import {LaunchDetailsFragment} from '../../fragments';
import {LaunchSite, Links} from '../../types';

export type LaunchDetails = LaunchDetailsFragment & LaunchSite & Links;
export type GetLaunchDetails = {
  launch: LaunchDetails;
};
