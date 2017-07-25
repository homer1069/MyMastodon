import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Feeds } from '../feeds/feeds.component';

const FeedTabs = TabNavigator({
  subscriberFeeds: { screen: Feeds },
  instanceFeeds: { screen: Feeds }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    pressColor: '#FF0000',
    indicatorStyle: {
      height: 2,
      backgroundColor: '#FFF'
    },
    style: {
      backgroundColor: '#a2273C',
      borderTopWidth: 1,
      borderColor: '#3f101c'
    }
  }
});

// Main component
export class Home extends React.Component {
    static navigationOptions = {
        title: 'Page d\'accueil',
        headerLeft: null
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FeedTabs/>
            </View>
        );
    }
};