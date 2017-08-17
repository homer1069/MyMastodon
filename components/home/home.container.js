import { connect } from 'react-redux';

import { Home } from './home.component';

const mapStateToProps = (state) => {
    return {
        api: state ? state.api : null
    };
};

export const HomeContainer = connect(mapStateToProps, null)(Home);