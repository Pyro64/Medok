import React from 'react';

import Blog from "./Blog";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        blogPage: state.blogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const DoctorContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default DoctorContainer;