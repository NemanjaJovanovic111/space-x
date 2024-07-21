import {useCallback} from 'react';
import {useColorScheme} from 'react-native';

import {Color, ColorScheme, Colors} from '@theme';
import {Logger} from '@utils';

export const useTheme = () => {
  const scheme = useColorScheme() as ColorScheme;

  const theme = Colors?.[scheme] ?? Colors.light;

  const getColor = useCallback(
    (color?: Color) => {
      if (!color) {
        Logger.warn('No color provided');
        return theme.primary;
      }
      const themeColor = theme?.[color];

      if (!themeColor) {
        Logger.warn('Get default color');
        return theme.primary;
      }
      return themeColor;
    },
    [theme],
  );

  return {
    theme,
    getColor,
  };
};
