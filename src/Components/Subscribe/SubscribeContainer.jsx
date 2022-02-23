import React from 'react';
import { sendMailCreator, updateNewMailCreator } from "../../Redux/subscribe-reducer";
import { connect } from "react-redux";
import Subscribe from './Subscribe';

let mapStateToProps = (state) => {
    return {
        subscribe: state.subscribe,
        newSubscribeMail: state.subscribe.newSubscribeMail,
        placeholder: state.subscribe.placeholder
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMail: () => {
            dispatch(sendMailCreator())
        },
        updateNewMail: (emailValue) => {
            dispatch(updateNewMailCreator(emailValue));
        }
    }
}

const SubscribeContainer = connect(mapStateToProps, mapDispatchToProps)(Subscribe);

export default SubscribeContainer;