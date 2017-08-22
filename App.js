import React from 'react';
import './ReactotronConfig'
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';

import { AppNavigator } from './components/navigators/main_navigator.component';

import { configureStore } from './store/store-configuration';

// Init redux
const store = configureStore();

// Main component
export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
          <AppNavigator />
      </Provider>
    );
  }
};
