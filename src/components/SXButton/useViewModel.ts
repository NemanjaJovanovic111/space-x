import {useTheme} from '@hooks';

import {ViewModelProps} from './types';

const useViewModel = ({type, disabled}: ViewModelProps) => {
  const {getColor} = useTheme();

  const getButtonStyle = () => {
    if (disabled) {
      return {
        background: getColor('disabledPrimary'),
      };
    }

    return {
      background:
        type === 'primary' ? getColor('secondary') : getColor('secondary'),
    };
  };

  return {
    buttonStyle: getButtonStyle(),
  };
};

export default useViewModel;
