import React from 'react';
import './ReactotronConfig'
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Login } from './components/login/login.component';
import { Home } from './components/home/home.component';
import { TootEdition } from './components/toots/toot-edition.component';

import { configureStore } from './store/store-configuration';

// Init redux
const store = configureStore();


// Main component
class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={{flex: 1}}>
          <StatusBar hidden={ true }/>
        </View>
      </Provider>
    );
  }
};

// Routing, Navigation
export default StackNavigator({
    initialRouteName: {
        screen: Login
    },
    login: {
        screen: Login
     },
     home: {
        screen: Home
     },
     tootEdition: {
       screen: TootEdition
     }
});
