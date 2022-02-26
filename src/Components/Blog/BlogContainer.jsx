import React from 'react';

import Blog from "./Blog";
import { connect } from "react-redux";
import { addPageCreator, isFullCreator } from '../../Redux/blog-reducer';

let mapStateToProps = (state) => {
    return {
        blogPage: state.blogPage,
        step: state.step,
        pageSize: state.pageSize,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPage: (value) => {
            dispatch(addPageCreator(value))
        },
        isFull: () => {
            dispatch(isFullCreator())
        },
    }
}
const DoctorContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default DoctorContainer;