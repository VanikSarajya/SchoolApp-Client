import React from 'react';
import {connect} from 'react-redux';
import {getCourses, deleteCourse} from '../../actions/courseAction';
import CourseList from '../../components/CourseComponents/CourseList';

export class Courses extends React.Component {
    componentWillMount(){
        this.props.getCourses();
    }
    render(){
        return (
            <CourseList 
                deleteCourse = {this.props.deleteCourse}
                courses = {this.props.courses}
                message = {this.props.message}
            />
        );
    }
}


const mapStateToProps =  (state) => {
    return {
        courses:state.courseReducer.courses,
        message: state.courseReducer.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: () => {
            dispatch(getCourses());
        },
        deleteCourse : (id) => {
            dispatch(deleteCourse(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Courses);