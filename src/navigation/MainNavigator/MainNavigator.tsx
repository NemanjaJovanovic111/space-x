import React from 'react';

import {Launch, LaunchDetails} from '@features/launch';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Component} from '@types';

import {SCREEN_MODAL_OPTIONS, SCREEN_OPTIONS} from '../options';
import {AppRoute} from '../routes';
import type {MainNavigatorParamsList} from './types';

const MainStack = createNativeStackNavigator<MainNavigatorParamsList>();

const MainNavigator: Component = () => {
  return (
    <MainStack.Navigator initialRouteName={AppRoute.LAUNCH_SCREEN}>
      <MainStack.Screen
        name={AppRoute.LAUNCH_SCREEN}
        component={Launch}
        options={SCREEN_OPTIONS}
      />
      <MainStack.Screen
        name={AppRoute.LAUNCH_DETAILS_SCREEN}
        component={LaunchDetails}
        options={SCREEN_MODAL_OPTIONS}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
