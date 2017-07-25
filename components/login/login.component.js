import React from 'react';
import { Text, View, TextInput, Button, ToastAndroid } from 'react-native';

import { loginStyle } from './login.style';
import { globalStyles } from '../common/global.style';

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            domain: '',
            username: '',
            password: ''
        };
    }

    static navigationOptions = {
        header: null
    }

    updateForm(key, text) {
        const newState = Object.assign({}, this.state);
        newState[key] = text;
        this.setState(newState);
    }

    // Check form fields content
    submitForm() {
        // Replace by react-mixin to check rules
        if (this.state.domain === '' || this.state.username === '' || this.state.password === '' ) {
            ToastAndroid.show('Veuillez remplir le formulaire', ToastAndroid.SHORT);
        } else {
            this.props.navigation.navigate('home');
        }
    }

    render() {
        return (
            <View style={ loginStyle.container }>
                <Text style={ globalStyles.addMarginBottom }>Bienvenue sur MyMastodon</Text>
                <TextInput style={ [ loginStyle.inputText, globalStyles.addMarginBottom ] }
                           underlineColorAndroid="transparent"
                           placeholder="Domaine"
                           onChangeText={ (text) => this.updateForm('domain', text) }
                           value={ this.state.domain }/>
                <TextInput style={ [ loginStyle.inputText, globalStyles.addMarginBottom ] }
                           underlineColorAndroid="transparent"
                           placeholder="Pseudonyme"
                           onChangeText={ (text) => this.updateForm('username', text) }
                           value={ this.state.username }/>
                <TextInput style={ [ loginStyle.inputText, globalStyles.addMarginBottom ] }
                           underlineColorAndroid="transparent"
                           placeholder="Mot de passe"
                           onChangeText={ (text) => this.updateForm('password', text) }
                           secureTextEntry={true}
                           value={ this.state.password }/>
                <Button
                    onPress={() => this.submitForm() }
                    title="Se connecter"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

            </View>
        );
    }
}
