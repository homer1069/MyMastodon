import React from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Login } from './components/login/login.component';
import { Home } from './components/home/home.component';
import { TootEdition } from './components/toots/toot-edition.component';

// Main component
class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={ true }/>
      </View>
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
