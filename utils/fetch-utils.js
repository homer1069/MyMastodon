import axios from 'axios';
import _ from 'lodash';

// Build API request method with current token
export const fetchUtils = {
    get: (token, path) => {
        return new Promise((resolve, reject) => {
            axios.get(path, { headers:
                {   'Authorization': `Bearer ${ token }`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then( response => {
                return resolve(response);
            }).catch(error => {
                console.error(error);
            });
        });
    },
    // Execute multiple get requests
    all: (token, paths) => {
        const fetchItems = [];
        let config = {
            headers: {
                'Authorization': `Bearer ${ token }`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        _.forEach(paths, (path) => {
            fetchItems.push(axios.get(path), config);
        });

        return new Promise((resolve, reject) => {
            axios.all(fetchItems).then((response) => {
                return resolve(arguments);
            }).catch(error => {
                console.error(error);
            });
        });
    }
}