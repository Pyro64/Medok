import React from 'react';

import MyMap from "./MyMap";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        customMap: state.customMap
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const MyMapContainer = connect(mapStateToProps, mapDispatchToProps)(MyMap);

export default MyMapContainer;