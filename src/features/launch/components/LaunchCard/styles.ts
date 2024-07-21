import {StyleSheet} from 'react-native';

import {Spacings} from '@theme';

const styles = StyleSheet.create({
  card: {
    marginVertical: Spacings.Cozy,
    gap: Spacings.Petite,
    overflow: 'hidden',
    borderRadius: Spacings.Minimal,
    padding: Spacings.Compact,
    minHeight: 200,
    maxHeight: 200,
  },
  details: {
    maxHeight: 50,
  },
});

export default styles;
