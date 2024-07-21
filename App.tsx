import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ApolloProvider} from '@apollo/client';
import {MainNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloService} from '@services';
import type {Component} from '@types';

const App: Component = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={ApolloService.client}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
