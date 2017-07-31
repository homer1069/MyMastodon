import React from 'react';
import { View, TextInput, Button } from 'react-native';

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

    sendToot() {
        console.log('Pouet')
    }

    render() {
        return (
            <View>
                <TextInput
                    style={ tootEditionStyle.input }
                    underlineColorAndroid="transparent"
                    onChangeText={(toot) => this.setState({toot: toot})}
                    placeholder="Quoi de neuf ?"
                    value={this.state.toot}
                    multiline={ true }
                    numberOfLines = {10}
                    maxLength={ 500 }
                />
                <Button style={ tootEditionStyle.button }
                        color="#3399ff"
                        title="Pouet"
                        onPress={() => this.sendToot() }/>
            </View>
        );
    }
}
