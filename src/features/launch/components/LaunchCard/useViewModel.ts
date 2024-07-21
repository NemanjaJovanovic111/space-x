import {useTheme} from '@hooks';

import {ViewModelProps} from './types';

const useViewModel = ({data, onPress}: ViewModelProps) => {
  const {getColor} = useTheme();
  const labels = {
    missionName: `Mission name: ${data?.mission_name || ''}`,
    rocketName: `Rocket name: ${data?.rocket?.rocket_name || ''} `,
    rocketType: `Rocket type:  ${data?.rocket?.rocket_type || ''} `,
    launchDate: `Launch date: ${data?.launch_date_utc || ''} `,
    details: data?.details,
  };

  const onPressHandler = () => onPress(data?.id);

  const cardStyle = {
    backgroundColor: getColor('secondary'),
    shadowColor: getColor('primary'),
  };

  return {
    cardStyle,
    labels,
    onPressHandler,
  };
};

export default useViewModel;
