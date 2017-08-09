import React from 'react';
import axios from 'axios';
import { ActivityIndicator, Text, View, TextInput, Button, ToastAndroid, Image, Linking, AsyncStorage } from 'react-native';

import { loginStyle } from './login.style';
import { globalStyles } from '../common/global.style';

import MastodonAPI from '../../utils/mastodon-api';

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            domain: '',
            isLoading: false,
            clientId: '',
            clientSecret: ''
        };

        this._handleOpenURL = this._handleOpenURL.bind(this);
    }

    static navigationOptions = {
        header: null
    }

    // Get return of the link
    componentDidMount() {
        Linking.getInitialURL().then((ev) => {
            if (ev) {
                this._handleOpenURL(ev);
            }
        }).catch(err => {
            console.warn('An error occurred', err);
        });
        Linking.addEventListener('url', this._handleOpenURL);
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this._handleOpenURL);
    }

    _handleOpenURL(event) {
        this.props.navigation.navigate('home');
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
        if (this.state.domain === '') {
            ToastAndroid.show('Veuillez renseigner l\'instance', ToastAndroid.SHORT);
        } else {
            // Display loading
            this.setState({ isLoading: true });
            // Get credentials from API
            axios.post(`https://${ this.state.domain }/api/v1/apps`, {
                client_name: 'MyMastodon',
                redirect_uris: 'mastodon://callback',
                scopes: 'read write follow'
            }).then(response => {
                clientId     = response.data.client_id
                clientSecret = response.data.client_secret

                // Init Mastodon API object
                this.mastodonAPI = new MastodonAPI(this.state.domain, clientId, clientSecret);

                // Get authorization
                this.getAuthorization();

                // Hide loading
                this.setState({ isLoading: false });
            }).catch(error => {
                console.error(error)
            })
        }
    }

    // Get authorization to get API
    getAuthorization() {
        this.mastodonAPI.getAuthorizationUrl().then(url => {
            Linking.openURL(url);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const appLogo = require('../../assets/images/mastodon_logo.png');
        if (this.state.isLoading) {
            return (
                <View style={ loginStyle.container }>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        return (
            <View style={ loginStyle.container }>
                <Image source={ appLogo } style={ loginStyle.logo }/>
                <TextInput style={ [ loginStyle.inputText, globalStyles.addMarginBottom ] }
                           underlineColorAndroid="transparent"
                           placeholder="Domaine"
                           onChangeText={ (text) => this.updateForm('domain', text) }
                           value={ this.state.domain }/>
                <Button
                    onPress={() => this.submitForm() }
                    style={ { height: 40 } }
                    title="Se connecter à l'instance"
                    color="#3399ff"
                    accessibilityLabel="Connexion"
                />
            </View>
        );
    }
}
