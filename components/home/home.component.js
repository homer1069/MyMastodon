import React from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TabNavigator } from 'react-navigation';
import { Feeds } from '../feeds/feeds.component';

import { homeStyle } from './home.style';

const FeedTabs = TabNavigator({
  subscriberFeeds: {
    screen: Feeds,
    navigationOptions: ({ navigation }) => ({
      title: 'Abonnements'
    })
  },
  instanceFeeds: {
    screen: Feeds,
    navigationOptions: ({ navigation }) => ({
      title: 'Instance'
    })
   }
}, {
  tabBarPosition: 'top',
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
export class Home extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    // screenProps to get screen element
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Mes flux',
        headerLeft: null
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <FeedTabs/>
                <TouchableHighlight style={ homeStyle.tootEditButton }
                    underlayColor='#3399ff' onPress={ () => { this.props.navigation.navigate('tootEdition'); } }>
                    <Icon name="textsms" size={30} color="white" />
                </TouchableHighlight>
            </View>
        );
    }
};