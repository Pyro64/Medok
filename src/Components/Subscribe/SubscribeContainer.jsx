
import { sendMail, updateNewMail } from "../../Redux/subscribe-reducer";
import { connect } from "react-redux";
import Subscribe from './Subscribe';

let mapStateToProps = (state) => {
    return {
        subscribe: state.subscribe,
        newSubscribeMail: state.subscribe.newSubscribeMail,
        placeholder: state.subscribe.placeholder
    }
}


const SubscribeContainer = connect(mapStateToProps, { sendMail, updateNewMail })(Subscribe);

export default SubscribeContainer;