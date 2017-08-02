import config from './config';

/**
 * Represent current Mastodon API state
 */
export default class MastodonCustomAPI {
    constructor(domain) {
        this.baseUrl = `https://${ domain }`;
        this.scopes = config.scopes;
        this.clientName = config.clientName;
        this.clientId = '';
        this.clientSecret = '';
        this.token = '';
    }

    setToken(token) {
        this.token = token;
    }
}