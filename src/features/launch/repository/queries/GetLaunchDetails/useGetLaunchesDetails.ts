import {gql, useQuery} from '@apollo/client';

import {LAUNCH_DETAILS_FRAGMENT} from '../../fragments';
import {ID} from '../../types';
import {GetLaunchDetails} from './types';

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      ...LaunchDetails
      launch_site {
        site_name
      }
      links {
        article_link
        video_link
      }
    }
  }
  ${LAUNCH_DETAILS_FRAGMENT}
`;

export const useGetLaunchesDetails = ({id}: {id: ID}) => {
  const {loading, error, data} = useQuery<GetLaunchDetails>(
    GET_LAUNCH_DETAILS,
    {
      variables: {id},
    },
  );

  return {
    loading,
    error,
    launchDetails: data?.launch ?? null,
  };
};
