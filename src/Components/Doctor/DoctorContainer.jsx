import React from 'react';

import Doctor from "./Doctor";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
    return {
        doctorPage: state.doctorPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const DoctorContainer = connect(mapStateToProps, mapDispatchToProps)(Doctor);

export default DoctorContainer;