import React from 'react';
import axios from 'axios';
import { ActivityIndicator, WebView, Text, View, TextInput, Button, ToastAndroid, Image, Linking, AsyncStorage } from 'react-native';

import { loginStyle } from './login.style';
import { globalStyles } from '../common/global.style';

import MastodonAPI from '../../utils/mastodon-api';

/**
 * Auth user and init Mastodon API helper
 */
export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            domain: '',
            isLoading: false,
            clientId: '',
            clientSecret: '',
            url: ''
        };
    }

    static navigationOptions = {
        header: null
    }

    renderLoading() {
        return (
            <View style={ loginStyle.container }>
                <ActivityIndicator size="large"/>
            </View>
        );
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

                this.mastodonAPI.getAuthorizationUrl().then((url) => {
                    // Set auth url
                    this.setState({
                        url: url
                    });
                });

            }).catch(error => {
                console.error(error)
            })
        }
    }

    /**
     * Get code, set new token and get new page
     * @param {* string} url
     */
    getAuthorizationCode(url) {
        if (url.match(/\?code=(.*)/)) {
            const code = RegExp.$1
            this.mastodonAPI.getToken(code).then(response => {
                this.props.navigation.navigate('home');
            });
        }
    }

    render() {
        const appLogo = require('../../assets/images/mastodon_logo.png');
        if (this.state.url !== '') {
            return (<WebView
              source={{uri: this.state.url}}
              renderLoading={ () => { this.renderLoading(); } }
              style={this.state.webViewStyle}
              onLoad={(event) => this.getAuthorizationCode(event.nativeEvent.url)}
            />);
        }
        if (this.state.isLoading) {
            this.renderLoading();
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
