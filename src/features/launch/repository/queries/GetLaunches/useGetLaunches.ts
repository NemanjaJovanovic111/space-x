import {gql, useQuery} from '@apollo/client';

import {LAUNCH_DETAILS_FRAGMENT} from '../../fragments';
import {GetLaunches} from './types';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      id
      ...LaunchDetails
    }
  }
  ${LAUNCH_DETAILS_FRAGMENT}
`;

export const useGetLaunches = () => {
  const {loading, error, data, refetch} = useQuery<GetLaunches>(GET_LAUNCHES);

  return {
    loading,
    error,
    launches: data?.launches ?? [],
    refetch,
  };
};
