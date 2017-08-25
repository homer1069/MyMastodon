import React from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TabNavigator, DrawerNavigator } from 'react-navigation';
import { HomeFeedsContainer, PublicFeedsContainer } from '../feeds/feeds.container';
import { ProfileContainer } from '../profile/profile.container';

import { homeStyle } from './home.style';

const FeedTabs = TabNavigator({
  instanceFeeds: {
    screen: HomeFeedsContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Instance'
    })
  },
  subscriberFeeds: {
    screen: PublicFeedsContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Public'
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

const MenuNavigator = DrawerNavigator({
  Feed: {
    screen: FeedTabs,
    navigationOptions: ({ navigation }) => ({
      title: 'Liste des flux'
    })
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Mon profil'
    })
  }
});

// Main component (which contains feeds and edit option)
export class Home extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    // screenProps to get screen element
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Page principale',
        headerLeft: null
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <MenuNavigator/>
                <TouchableHighlight style={ homeStyle.tootEditButton }
                    underlayColor='#3399ff' onPress={ () => { this.props.navigation.navigate('tootEdition'); } }>
                    <Icon name="textsms" size={30} color="white" />
                </TouchableHighlight>
            </View>
        );
    }
};