import React from 'react';
import { Text, View, Button, ActivityIndicator, ListView, RefreshControl } from 'react-native';
import { FeedRow } from './feed_row.component';

import { fetchUtils } from '../../utils/fetch-utils';

import { globalStyles } from '../common/global.style';

export class PublicFeeds extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            feeds: []
        };
    }

    // Manage feeds refresh
    _onRefresh() {
        this.setState({refreshing: true});
        fetchUtils.get(this.props.api.token, this.props.api.baseUrl + '/api/v1/timelines/public').then(response => {
            this.setState({
                refreshing: false,
                feeds: response.data
            });
        });
    }

    componentDidMount() {
        // Get feeds
        fetchUtils.get(this.props.api.token, this.props.api.baseUrl + '/api/v1/timelines/public').then(response => {
            this.setState({
                feeds: response.data
            });
        });
    }

    render() {
        if (this.state.feeds) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <View>
                    <ListView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                        dataSource={ ds.cloneWithRows(this.state.feeds) }
                        renderRow={ (row, j, k) => <FeedRow feed={ row } index={ parseInt(k, 10) }/> }
                    />
                </View>
            );
        } else {
            return <ActivityIndicator color={ globalStyles.redColor } size="large" />
        }
    }
};
