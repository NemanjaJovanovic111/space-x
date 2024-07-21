enum ColorNames {
  text,
  primary,
  secondary,
  disabledPrimary,
  disabledSecondary,
  background,
  surface,
  error,
}

type Palette = Record<keyof typeof ColorNames, string>;

const LightPallet: Palette = {
  text: '#000000',
  primary: '#0B3D91',
  secondary: '#1F75FE',
  disabledPrimary: '#7F7F7F',
  disabledSecondary: '#B0C4DE',
  background: '#fff',
  surface: '#2C2C2C',
  error: '#FF6347',
};

const DarkPallet: Palette = {
  text: '#FFFFFF',
  primary: '#0A2A59',
  secondary: '#1A5AB5',
  disabledPrimary: '#3C3C3C',
  disabledSecondary: '#8A9BAB',
  background: '#121212',
  surface: '#1C1C1C',
  error: '#D9534F',
};

export type Color = keyof typeof ColorNames;

export type ColorScheme = 'light' | 'dark';

export const Colors: Record<ColorScheme, Palette> = {
  light: LightPallet,
  dark: DarkPallet,
};
