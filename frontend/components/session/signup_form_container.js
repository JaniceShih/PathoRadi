import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.currentUser,
        currentUser:  state.session.currentUser ? state.entities.users[state.session.currentUser] : undefined        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        login: user => dispatch(login(user))
    }
}

const SignupFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;