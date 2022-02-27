
import Blog from "./Blog";
import { connect } from "react-redux";
import { addPage, isFull } from '../../Redux/blog-reducer';

let mapStateToProps = (state) => {
    return {
        blogPage: state.blogPage,
        step: state.step,
        pageSize: state.pageSize,
    }
}

const DoctorContainer = connect(mapStateToProps, { addPage, isFull })(Blog);

export default DoctorContainer;