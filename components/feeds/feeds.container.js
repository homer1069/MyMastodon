import { connect } from 'react-redux';

import { HomeFeeds } from './homefeeds.component';
import { PublicFeeds } from './publicfeeds.component';

const mapStateToProps = (state) => {
    return {
        api: state ? state.api : null
    };
};

export const HomeFeedsContainer = connect(mapStateToProps, null)(HomeFeeds);
export const PublicFeedsContainer = connect(mapStateToProps, null)(PublicFeeds);