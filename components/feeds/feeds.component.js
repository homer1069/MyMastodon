import React from 'react';
import { Text, View } from 'react-native';

export class Feeds extends React.Component {

    static navigationOptions = {
        title: 'Flux d\'actualité'
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Test</Text>
            </View>
        );
    }
};
