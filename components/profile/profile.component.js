import React from 'react';
import { View, Text, Image, ActivityIndicator, ListView } from 'react-native';
import _ from 'lodash';

import { FeedRow } from '../feeds/feed_row.component';

import { profilePageStyle } from './profile.style';
import { globalStyles } from '../common/global.style';

import { fetchUtils } from '../../utils/fetch-utils';

export class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            statuses: []
        }
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Page de profile',
        headerLeft: null
    });

    // Get user account (from its id). By default, current account is fetched.
    componentDidMount() {
        fetchUtils.get(this.props.api.token, `${ this.props.api.baseUrl }/api/v1/accounts/verify_credentials`).then(response => {
            fetchUtils.get(this.props.api.token, `${ this.props.api.baseUrl }/api/v1/accounts/${ response.data.id }/statuses`).then(statuses => {
                this.setState({
                    profile: response.data,
                    statuses: statuses.data
                });
            });
        });
    }

    render() {
        if (_.isEmpty(this.state.profile)) {
            return <ActivityIndicator color={ globalStyles.redColor } size="large" />
        }
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View style={ { flex: 1 } }>
                <View style={ profilePageStyle.profileHeader }>
                    <Image
                        style={ profilePageStyle.avatar }
                        source={ {uri: this.state.profile.avatar } }
                    />
                    <Text style={ [globalStyles.addMarginBottom, profilePageStyle.username, profilePageStyle.headerText] }>
                        { this.state.profile.username }
                    </Text>
                    <Text style={ [globalStyles.addMarginBottom, profilePageStyle.headerText] }>
                        { (this.state.profile.display_name !== '') ? this.state.profile.display_name : 'Pas de nom visible' }
                    </Text>
                    <Text style={ profilePageStyle.headerText }>{ this.state.profile.url }</Text>
                </View>
                <View style={ profilePageStyle.statusBar }>
                        <View>
                            <Text>STATUS</Text>
                            <Text style={ { textAlign: 'center'} }>{ this.state.profile.statuses_count }</Text>
                        </View>
                        <View>
                            <Text>ABONNEMENTS</Text>
                            <Text style={ { textAlign: 'center'} }>{ this.state.profile.following_count }</Text>
                        </View>
                        <View>
                            <Text>ABONNES</Text>
                            <Text style={ { textAlign: 'center'} }>{ this.state.profile.followers_count }</Text>
                        </View>
                </View>
                <View style={ { flex: 5 } }>
                    <ListView
                        dataSource={ ds.cloneWithRows(this.state.statuses) }
                        renderRow={ (row, j, k) => <FeedRow feed={ row } index={ parseInt(k, 10) }/> }
                    />
                </View>
            </View>
        );
    }
}
