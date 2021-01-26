/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import Registration from './app/Rstration/ioio';
import Conversation from './app/Conversation/Conversation';

import App from './app/App';

const PracApp = () => <App />;

AppRegistry.registerComponent(appName, () => PracApp);
