import React from "react";
import { connect } from "react-redux";
import NavBar from "./navbar";

import {logout} from "../../actions/session_actions" ;
import {openModal} from "../../actions/modal_actions";

const mstp = (state, ownProps) => {    
    return {
        currentUserId: state.session.currentUser,
        currentUser:  state.session.currentUser ? state.entities.users[state.session.currentUser] : undefined
    };
};


const mdtp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),        
        openModal: (modal) => dispatch(openModal(modal))
    });
};


export default connect(mstp, mdtp)(NavBar);


