/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store from './lib/redux/store/configure_store';
import RouterPAGE from './lib/router/getRouter';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar animated={true} backgroundColor="#61dafb" />
        <View style={{flex: 1}}>
          <RouterPAGE />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
