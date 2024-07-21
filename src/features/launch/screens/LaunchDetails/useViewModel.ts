import {Linking} from 'react-native';

import {useGetLaunchesDetails} from '@features/launch/repository/queries';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Logger} from '@utils';

const useViewModel = () => {
  const route =
    useRoute<RouteProp<MainNavigatorParams['LaunchDetailsScreen']>>();
  const id = route.params?.id;
  const {launchDetails, loading, error} = useGetLaunchesDetails({id});

  const displayData = {
    missionName: `Mission name: ${launchDetails?.mission_name || ''}`,
    rocketName: `Rocket name: ${launchDetails?.rocket?.rocket_name || ''} `,
    rocketType: `Rocket type:  ${launchDetails?.rocket?.rocket_type || ''} `,
    launchDate: `Launch date: ${launchDetails?.launch_date_utc || ''} `,
    details: launchDetails?.details,
    site: 'Visit site',
    video: launchDetails?.links?.video_link,
  };

  const onPressSite = () => {
    try {
      Linking.openURL(launchDetails?.links?.article_link!);
    } catch {
      Logger.error('Cant open link');
    }
  };

  return {
    onPressSite,
    displayData,
    loading,
    error,
  };
};

export default useViewModel;
