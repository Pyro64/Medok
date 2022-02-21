import React from 'react';

import ContactsLink from "./ContactsLink/ContactsLink";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsLink);

export default ContactsContainer;