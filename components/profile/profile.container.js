import { connect } from 'react-redux';

import { Profile } from './profile.component';

const mapStateToProps = (state) => {
    return {
        api: state ? state.api : null
    };
};

export const ProfileContainer = connect(mapStateToProps, null)(Profile);