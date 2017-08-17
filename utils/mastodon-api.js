import config from './config';
import axios from 'axios';
import querystring from 'querystring';

/**
 * Represent current Mastodon API state + utils
 */
export default class MastodonAPI {
    constructor(domain, clientId = '', clientSecret = '') {
        this.baseUrl = `https://${ domain }`;
        this.scopes = config.scopes;
        this.clientName = config.clientName;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.token = '';
    }

    setClientInfo(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    // Generate auth url
    getAuthorizationUrl() {
        const redirectUri = 'mastodon://callback';
        return new Promise((resolve) => {
            resolve(`${this.baseUrl}/oauth/authorize?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read+write+follow&response_type=code`);
        });
    }

    // Get token from code
    getToken(code) {
        return new Promise((resolve, reject) => {
            // If token exists
            if (this.token) {
                resolve(this.token);
            }
            axios.post(`${ this.baseUrl }/oauth/token`, {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                code,
                grant_type: 'authorization_code',
                redirect_uri: 'mastodon://callback'
            }).then(response => {
                this.token = response.data.access_token;
                resolve(this.token);
            }).catch(error => {
                console.error(error);
            })
        });
    }

    setToken(token) {
        this.token = token;
    }
}