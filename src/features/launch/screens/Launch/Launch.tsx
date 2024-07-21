import React from 'react';

import {SXScreen} from '@components';
import {LaunchesList} from '@features/launch/components';
import type {Component} from '@types';

const Launch: Component<MainNavigatorParams['LaunchScreen']> = () => {
  return (
    <SXScreen>
      <LaunchesList />
    </SXScreen>
  );
};

export default Launch;
