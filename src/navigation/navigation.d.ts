import {MainNavigatorParamsList} from './MainNavigator/types';

declare global {
  type MainNavigatorParams = {
    [K in keyof MainNavigatorParamsList]: NativeStackScreenProps<
      MainNavigatorParamsList,
      K
    >;
  };
}
