import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../lib/redux/store/configure_store';
import RouterPAGE from '../lib/router/getRouter';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
const store = configureStore();

class Initialize extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <RouterPAGE />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default Initialize;
