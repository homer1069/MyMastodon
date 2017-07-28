import React from 'react';
import { View, TextInput } from 'react-native';

import { tootEditionStyle } from './toot-edition.style';

export class TootEdition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toot: ''
        }
    }

    static navigationOptions = {
        title: "Ajouter un pouet"
    }

    render() {
        return (
            <View>
                <TextInput
                    style={ tootEditionStyle.input }
                    underlineColorAndroid="transparent"
                    onChangeText={(toot) => this.setState({toot: toot})}
                    value={this.state.toot}
                    multiline={ true }
                    numberOfLines = {10}
                    maxLength={ 500 }
                />
            </View>
        );
    }
}
