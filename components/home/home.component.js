import React from 'react';
import { Text, View } from 'react-native';

// Main component
export class Home extends React.Component {
    static navigationOptions = {
        title: 'Page d\'accueil',
        headerLeft: null
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Test</Text>
            </View>
        );
    }
};