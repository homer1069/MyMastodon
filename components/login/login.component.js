import React from 'react';
import { Text, View, TextInput, Button, ToastAndroid, Image } from 'react-native';

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

    // Update state form using key (name of the field) and value
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

    componentWillUnmount() {
        console.log('Destruction du composant');
    }

    render() {
        const appLogo = require('../../assets/images/mastodon_logo.png');
        return (
            <View style={ loginStyle.container }>
                <Image source={ appLogo } style={ loginStyle.logo }/>
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
                    style={ { height: 40 } }
                    title="Se connecter"
                    color="#3399ff"
                    accessibilityLabel="Connexion"
                />

            </View>
        );
    }
}
