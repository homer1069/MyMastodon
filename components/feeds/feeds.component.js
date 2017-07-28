import React from 'react';
import { Text, View, Button } from 'react-native';

export class Feeds extends React.Component {

    constructor(props) {
        super(props);
    }

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
