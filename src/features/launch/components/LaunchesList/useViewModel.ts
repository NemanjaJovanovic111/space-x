import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {LaunchRoutes} from '../../constants';
import {Launch, useGetLaunches} from '../../repository/queries';

const useViewModel = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainNavigatorParams['LaunchDetailsScreen']>
    >();
  const {launches, loading, error, refetch} = useGetLaunches();

  const onLaunchPress = (id: Launch['id']) =>
    navigation.navigate(LaunchRoutes.LAUNCH_DETAILS_SCREEN, {id});

  return {
    launches,
    loading,
    error,
    refetch,
    onLaunchPress,
  };
};

export default useViewModel;
