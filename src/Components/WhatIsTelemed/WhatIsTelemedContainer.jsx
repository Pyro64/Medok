import React from 'react';
import { connect } from "react-redux";
import WhatIsTelemed from './WhatIsTelemed';

let mapStateToProps = (state) => {
    return {
        homeData: state.whatIsTelemed.homeData,
        medicData: state.whatIsTelemed.medicData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const WhatisTelemedContainer = connect(mapStateToProps, mapDispatchToProps)(WhatIsTelemed);

export default WhatisTelemedContainer;