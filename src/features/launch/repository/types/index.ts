import {Maybe} from '@types';

export type ID = Maybe<string>;

export type Rocket = {
  rocket_name: Maybe<string>;
  rocket_type: Maybe<string>;
};

export type LaunchDetails = {
  mission_name: Maybe<string>;
  details: Maybe<string>;
  launch_date_utc: Maybe<string>;
};

export type LaunchSite = {
  launch_site: Maybe<{
    site_name: Maybe<string>;
  }>;
};

export type Links = {
  links: Maybe<{
    article_link: Maybe<string>;
    video_link: Maybe<string>;
  }>;
};
