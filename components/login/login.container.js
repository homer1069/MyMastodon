import { connect } from 'react-redux';
import * as Actions from '../../actions/action-types';
import { Login } from './login.component';

const mapDispatchToProps = (dispatch) => {
    return {
        initAPI: (newApi) => {
            dispatch({
                type: Actions.INIT_API,
                api: newApi
            })
        }
    }
};

export const LoginContainer = connect(null, mapDispatchToProps)(Login);
