import {useTheme} from '@hooks';
import {FONTS} from '@theme';

import type {ViewModelProps} from './types';

const useViewModel = ({color, font = 'H6/REGULAR'}: ViewModelProps) => {
  const {getColor} = useTheme();

  const textColor = getColor(color);
  const fontStyle = FONTS?.[font] ?? FONTS['H6/REGULAR'];

  return {textColor, fontStyle};
};

export default useViewModel;
