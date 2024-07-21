import {TextStyle} from 'react-native';

const generateFontFamily = (
  fontFamily: FONT_FAMILIES,
  fontWeight: FONT_WEIGHTS,
) => `${fontFamily}-${fontWeight}`;

export enum FONT_FAMILIES {
  POPPINS = 'Poppins',
}

enum FONT_SIZE {
  Petite = 12,
  Minimal = 14,
  Compact = 16,
  Cozy = 18,
  Spacious = 20,
  Vast = 22,
}

enum FONT_WEIGHTS {
  THIN = 'Thin',
  LIGHT = 'Light',
  REGULAR = 'Regular',
  MEDIUM = 'Medium',
  SEMI_BOLD = 'SemiBold',
  BOLD = 'Bold',
  EXTRA_BOLD = 'ExtraBold',
}

enum FONT_VARIATIONS {
  H1_EXTRA_BOLD = 'H1/EXTRA_BOLD',
  H1_BOLD = 'H1/BOLD',
  H1_SEMI_BOLD = 'H1/SEMI_BOLD',
  H1_MEDIUM = 'H1/MEDIUM',
  H1_REGULAR = 'H1/REGULAR',
  H1_LIGHT = 'H1/LIGHT',
  H1_THIN = 'H1/THIN',

  H2_EXTRA_BOLD = 'H2/EXTRA_BOLD',
  H2_BOLD = 'H2/BOLD',
  H2_SEMI_BOLD = 'H2/SEMI_BOLD',
  H2_MEDIUM = 'H2/MEDIUM',
  H2_REGULAR = 'H2/REGULAR',
  H2_LIGHT = 'H2/LIGHT',
  H2_THIN = 'H2/THIN',

  H3_EXTRA_BOLD = 'H3/EXTRA_BOLD',
  H3_BOLD = 'H3/BOLD',
  H3_SEMI_BOLD = 'H3/SEMI_BOLD',
  H3_MEDIUM = 'H3/MEDIUM',
  H3_REGULAR = 'H3/REGULAR',
  H3_LIGHT = 'H3/LIGHT',
  H3_THIN = 'H3/THIN',

  H4_EXTRA_BOLD = 'H4/EXTRA_BOLD',
  H4_BOLD = 'H4/BOLD',
  H4_SEMI_BOLD = 'H4/SEMI_BOLD',
  H4_MEDIUM = 'H4/MEDIUM',
  H4_REGULAR = 'H4/REGULAR',
  H4_LIGHT = 'H4/LIGHT',
  H4_THIN = 'H4/THIN',

  H5_EXTRA_BOLD = 'H5/EXTRA_BOLD',
  H5_BOLD = 'H5/BOLD',
  H5_SEMI_BOLD = 'H5/SEMI_BOLD',
  H5_MEDIUM = 'H5/MEDIUM',
  H5_REGULAR = 'H5/REGULAR',
  H5_LIGHT = 'H5/LIGHT',
  H5_THIN = 'H5/THIN',

  H6_EXTRA_BOLD = 'H6/EXTRA_BOLD',
  H6_BOLD = 'H6/BOLD',
  H6_SEMI_BOLD = 'H6/SEMI_BOLD',
  H6_MEDIUM = 'H6/MEDIUM',
  H6_REGULAR = 'H6/REGULAR',
  H6_LIGHT = 'H6/LIGHT',
  H6_THIN = 'H6/THIN',
}

export type Fonts = `${FONT_VARIATIONS}`;

// const DEFAULT_FONT_FAMILY = FONT_FAMILIES.POPPINS;

// const EXTRA_BOLD = generateFontFamily(
//   DEFAULT_FONT_FAMILY,
//   FONT_WEIGHTS.EXTRA_BOLD,
// );
// const BOLD = generateFontFamily(DEFAULT_FONT_FAMILY, FONT_WEIGHTS.BOLD);
// const SEMI_BOLD = generateFontFamily(
//   DEFAULT_FONT_FAMILY,
//   FONT_WEIGHTS.SEMI_BOLD,
// );
// const MEDIUM = generateFontFamily(DEFAULT_FONT_FAMILY, FONT_WEIGHTS.MEDIUM);
// const REGULAR = generateFontFamily(DEFAULT_FONT_FAMILY, FONT_WEIGHTS.REGULAR);
// const LIGHT = generateFontFamily(DEFAULT_FONT_FAMILY, FONT_WEIGHTS.LIGHT);
// const THIN = generateFontFamily(DEFAULT_FONT_FAMILY, FONT_WEIGHTS.THIN);

// export const FONTS: Record<FONT_VARIATIONS, TextStyle> = {
//   [FONT_VARIATIONS.H1_EXTRA_BOLD]: {
//     fontFamily: EXTRA_BOLD,
//     fontSize: FONT_SIZE.Vast,
//   },
//   [FONT_VARIATIONS.H1_BOLD]: {
//     fontFamily: BOLD,
//     fontSize: FONT_SIZE.Vast,
//   },
//   [FONT_VARIATIONS.H1_SEMI_BOLD]: {
//     fontFamily: SEMI_BOLD,
//     fontSize: FONT_SIZE.Vast,
//   },
//   [FONT_VARIATIONS.H1_MEDIUM]: {
//     fontFamily: MEDIUM,
//     fontSize: FONT_SIZE.Vast,
//   },
//   [FONT_VARIATIONS.H1_REGULAR]: {
//     fontFamily: REGULAR,
//     fontSize: FONT_SIZE.Vast,
//   },
//   [FONT_VARIATIONS.H1_LIGHT]: {
//     fontFamily: LIGHT,
//     fontSize: FONT_SIZE.Vast,
//   },
//   [FONT_VARIATIONS.H1_THIN]: {
//     fontFamily: THIN,
//     fontSize: FONT_SIZE.Vast,
//   },

//   [FONT_VARIATIONS.H2_EXTRA_BOLD]: {
//     fontFamily: EXTRA_BOLD,
//     fontSize: FONT_SIZE.Spacious,
//   },
//   [FONT_VARIATIONS.H2_BOLD]: {
//     fontFamily: BOLD,
//     fontSize: FONT_SIZE.Spacious,
//   },
//   [FONT_VARIATIONS.H2_SEMI_BOLD]: {
//     fontFamily: SEMI_BOLD,
//     fontSize: FONT_SIZE.Spacious,
//   },
//   [FONT_VARIATIONS.H2_MEDIUM]: {
//     fontFamily: MEDIUM,
//     fontSize: FONT_SIZE.Spacious,
//   },
//   [FONT_VARIATIONS.H2_REGULAR]: {
//     fontFamily: REGULAR,
//     fontSize: FONT_SIZE.Spacious,
//   },
//   [FONT_VARIATIONS.H2_LIGHT]: {
//     fontFamily: LIGHT,
//     fontSize: FONT_SIZE.Spacious,
//   },
//   [FONT_VARIATIONS.H2_THIN]: {
//     fontFamily: THIN,
//     fontSize: FONT_SIZE.Spacious,
//   },

//   [FONT_VARIATIONS.H3_EXTRA_BOLD]: {
//     fontFamily: EXTRA_BOLD,
//     fontSize: FONT_SIZE.Cozy,
//   },
//   [FONT_VARIATIONS.H3_BOLD]: {
//     fontFamily: BOLD,
//     fontSize: FONT_SIZE.Cozy,
//   },
//   [FONT_VARIATIONS.H3_SEMI_BOLD]: {
//     fontFamily: SEMI_BOLD,
//     fontSize: FONT_SIZE.Cozy,
//   },
//   [FONT_VARIATIONS.H3_MEDIUM]: {
//     fontFamily: MEDIUM,
//     fontSize: FONT_SIZE.Cozy,
//   },
//   [FONT_VARIATIONS.H3_REGULAR]: {
//     fontFamily: REGULAR,
//     fontSize: FONT_SIZE.Cozy,
//   },
//   [FONT_VARIATIONS.H3_LIGHT]: {
//     fontFamily: LIGHT,
//     fontSize: FONT_SIZE.Cozy,
//   },
//   [FONT_VARIATIONS.H3_THIN]: {
//     fontFamily: THIN,
//     fontSize: FONT_SIZE.Cozy,
//   },

//   [FONT_VARIATIONS.H4_EXTRA_BOLD]: {
//     fontFamily: EXTRA_BOLD,
//     fontSize: FONT_SIZE.Compact,
//   },
//   [FONT_VARIATIONS.H4_BOLD]: {
//     fontFamily: BOLD,
//     fontSize: FONT_SIZE.Compact,
//   },
//   [FONT_VARIATIONS.H4_SEMI_BOLD]: {
//     fontFamily: SEMI_BOLD,
//     fontSize: FONT_SIZE.Compact,
//   },
//   [FONT_VARIATIONS.H4_MEDIUM]: {
//     fontFamily: MEDIUM,
//     fontSize: FONT_SIZE.Compact,
//   },
//   [FONT_VARIATIONS.H4_REGULAR]: {
//     fontFamily: REGULAR,
//     fontSize: FONT_SIZE.Compact,
//   },
//   [FONT_VARIATIONS.H4_LIGHT]: {
//     fontFamily: LIGHT,
//     fontSize: FONT_SIZE.Compact,
//   },
//   [FONT_VARIATIONS.H4_THIN]: {
//     fontFamily: THIN,
//     fontSize: FONT_SIZE.Compact,
//   },

//   [FONT_VARIATIONS.H5_EXTRA_BOLD]: {
//     fontFamily: EXTRA_BOLD,
//     fontSize: FONT_SIZE.Minimal,
//   },
//   [FONT_VARIATIONS.H5_BOLD]: {
//     fontFamily: BOLD,
//     fontSize: FONT_SIZE.Minimal,
//   },
//   [FONT_VARIATIONS.H5_SEMI_BOLD]: {
//     fontFamily: SEMI_BOLD,
//     fontSize: FONT_SIZE.Minimal,
//   },
//   [FONT_VARIATIONS.H5_MEDIUM]: {
//     fontFamily: MEDIUM,
//     fontSize: FONT_SIZE.Minimal,
//   },
//   [FONT_VARIATIONS.H5_REGULAR]: {
//     fontFamily: REGULAR,
//     fontSize: FONT_SIZE.Minimal,
//   },
//   [FONT_VARIATIONS.H5_LIGHT]: {
//     fontFamily: LIGHT,
//     fontSize: FONT_SIZE.Minimal,
//   },
//   [FONT_VARIATIONS.H5_THIN]: {
//     fontFamily: THIN,
//     fontSize: FONT_SIZE.Minimal,
//   },

//   [FONT_VARIATIONS.H6_EXTRA_BOLD]: {
//     fontFamily: EXTRA_BOLD,
//     fontSize: FONT_SIZE.Petite,
//   },
//   [FONT_VARIATIONS.H6_BOLD]: {
//     fontFamily: BOLD,
//     fontSize: FONT_SIZE.Petite,
//   },
//   [FONT_VARIATIONS.H6_SEMI_BOLD]: {
//     fontFamily: SEMI_BOLD,
//     fontSize: FONT_SIZE.Petite,
//   },
//   [FONT_VARIATIONS.H6_MEDIUM]: {
//     fontFamily: MEDIUM,
//     fontSize: FONT_SIZE.Petite,
//   },
//   [FONT_VARIATIONS.H6_REGULAR]: {
//     fontFamily: REGULAR,
//     fontSize: FONT_SIZE.Petite,
//   },
//   [FONT_VARIATIONS.H6_LIGHT]: {
//     fontFamily: LIGHT,
//     fontSize: FONT_SIZE.Petite,
//   },
//   [FONT_VARIATIONS.H6_THIN]: {
//     fontFamily: THIN,
//     fontSize: FONT_SIZE.Petite,
//   },
// };

const generateFonts = (
  fontFamily: FONT_FAMILIES,
): Record<FONT_VARIATIONS, TextStyle> => {
  const fontFamilies = {
    [FONT_WEIGHTS.THIN]: generateFontFamily(fontFamily, FONT_WEIGHTS.THIN),
    [FONT_WEIGHTS.LIGHT]: generateFontFamily(fontFamily, FONT_WEIGHTS.LIGHT),
    [FONT_WEIGHTS.REGULAR]: generateFontFamily(
      fontFamily,
      FONT_WEIGHTS.REGULAR,
    ),
    [FONT_WEIGHTS.MEDIUM]: generateFontFamily(fontFamily, FONT_WEIGHTS.MEDIUM),
    [FONT_WEIGHTS.SEMI_BOLD]: generateFontFamily(
      fontFamily,
      FONT_WEIGHTS.SEMI_BOLD,
    ),
    [FONT_WEIGHTS.BOLD]: generateFontFamily(fontFamily, FONT_WEIGHTS.BOLD),
    [FONT_WEIGHTS.EXTRA_BOLD]: generateFontFamily(
      fontFamily,
      FONT_WEIGHTS.EXTRA_BOLD,
    ),
  };

  const fontSizes = {
    H1: FONT_SIZE.Vast,
    H2: FONT_SIZE.Spacious,
    H3: FONT_SIZE.Cozy,
    H4: FONT_SIZE.Compact,
    H5: FONT_SIZE.Minimal,
    H6: FONT_SIZE.Petite,
  };

  const fontStyles = Object.keys(FONT_VARIATIONS).reduce(
    (acc, key) => {
      const [header, weight] = key.split('_');
      return {
        ...acc,
        [FONT_VARIATIONS[key as keyof typeof FONT_VARIATIONS]]: {
          fontFamily:
            fontFamilies[FONT_WEIGHTS[weight as keyof typeof FONT_WEIGHTS]],
          fontSize: fontSizes[header as keyof typeof fontSizes],
        },
      };
    },
    {} as Record<FONT_VARIATIONS, TextStyle>,
  );

  return fontStyles;
};

export const FONTS = generateFonts(FONT_FAMILIES.POPPINS);
