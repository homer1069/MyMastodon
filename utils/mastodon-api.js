import config from './config';
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

    getAuthorizationUrl() {
        const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
        return new Promise((resolve) => {
            const url = this.baseUrl + '/oauth/authorize' + "?" + querystring.stringify({
            redirect_uri: redirectUri,
            response_type: 'code',
            client_id: this.clientId,
            scope: this.scopes
            });
            resolve(`${this.baseUrl}/oauth/authorize?client_id=${this.clientId}&redirect_uri=${ redirectUri }&scope=read+write+follow&response_type=code`);
        });
    }

    // Get token from code
    getToken(code) {
        return new Promise((resolve, reject) => {
            // If token exists
            if (this.token) {
                resolve(this.token);
            }
            const code = url.match(/\?code=([a-z0-9]+)/i)[1];
            axios.post(`https://${domain}/oauth/token`, {
                client_id: this.clientId,
                client_secret: clientSecret,
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