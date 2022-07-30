/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeIndex from './src/Home/index';
AppRegistry.registerComponent(appName, () => HomeIndex);
