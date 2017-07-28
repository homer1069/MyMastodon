import React from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TabNavigator } from 'react-navigation';
import { Feeds } from '../feeds/feeds.component';

const FeedTabs = TabNavigator({
  subscriberFeeds: { screen: Feeds },
  instanceFeeds: { screen: Feeds }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    pressColor: '#66b2ff',
    indicatorStyle: {
      height: 2,
      backgroundColor: '#FFF'
    },
    style: {
      backgroundColor: '#3399ff',
      borderTopWidth: 1,
      borderColor: '#0080ff'
    }
  }
});

// Main component (which contains feeds and edit option)
export class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    // screenProps to get screen element
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Mes flux',
        headerLeft: null,
        headerRight: (
          <Icon.Button name="textsms"
                       backgroundColor="#0080ff"
                       onPress={ () => { navigation.navigate('tootEdition'); } }/>
        )
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <FeedTabs/>
            </View>
        );
    }
};