import React from 'react';
import {Text, View} from 'react-native';

import {SXTouchable} from '../SXTouchable';
import styles from './styles';
import type {SXTextProps} from './types';
import useViewModel from './useViewModel';

const SXText: SXTextProps = ({
  testID = 'SX-TEXT',
  font = 'H6/REGULAR',
  children,
  color = 'text',
  onPress,
  textWrapperStyle,
  style,
  ...rest
}) => {
  const {fontStyle, textColor} = useViewModel({color, font});

  const TextContent = (
    <Text
      {...rest}
      style={[styles.textDefault, style, fontStyle, {color: textColor}]}
      children={children || ''}
    />
  );

  if (onPress) {
    return (
      <SXTouchable
        style={[styles.textWrapper, textWrapperStyle]}
        onPress={onPress}>
        {TextContent}
      </SXTouchable>
    );
  }

  return (
    <View style={[styles.textWrapper, textWrapperStyle]}>{TextContent}</View>
  );
};

export default SXText;
