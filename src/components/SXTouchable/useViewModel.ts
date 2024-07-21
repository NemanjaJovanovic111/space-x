import {useCallback} from 'react';
import {Gesture} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import throttle from 'lodash/throttle';

import type {ViewModelProps} from './types';

const useViewModel = ({
  hasThrottle,
  disabled = false,
  onPress,
}: ViewModelProps) => {
  const isActive = useSharedValue(false);

  const onPressHandler = useCallback(
    hasThrottle
      ? throttle(onPress, 500, {leading: false, trailing: false})
      : onPress,
    [hasThrottle, onPress],
  );

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      isActive.value = true;
    })
    .onTouchesUp(() => {
      if (!onPressHandler || disabled) {
        return;
      }
      runOnJS(onPressHandler)();
    })
    .onFinalize(() => {
      isActive.value = false;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive.value ? 0.5 : 1, {
        duration: 100,
      }),
      transform: [
        {
          scale: withSpring(isActive.value ? 0.94 : 1),
        },
      ],
    };
  }, [isActive]);

  return {
    gesture,
    animatedStyle,
  };
};

export default useViewModel;
