import React from 'react';

import ContactsLink from "./ContactsLink";
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
const ContactsLinkContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsLink);

export default ContactsLinkContainer;