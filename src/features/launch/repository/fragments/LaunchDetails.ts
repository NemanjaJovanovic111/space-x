import {gql} from '@apollo/client';

export const LAUNCH_DETAILS_FRAGMENT = gql`
  fragment LaunchDetails on Launch {
    mission_name
    rocket {
      rocket_name
      rocket_type
    }
    details
    launch_date_utc
  }
`;
