import React from 'react';
import {connect} from 'react-redux';
import {getStudents, deleteStudent} from '../../actions/studentAction';
import { StudentList } from '../../components/StudentComponents/StudentList';

export class Students extends React.Component {
    componentDidMount(){
        this.props.getStudents();
    }
    render () {
        return (
            <StudentList 
                students = {this.props.students}
                classes = {this.props.classes}
                message = {this.props.message}
                handleDelete = {this.props.handleDelete}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        students:state.studentReducer.students,
        message: state.studentReducer.message,
        classes: state.classReducer.classes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => {
            dispatch(getStudents());
        },
        handleDelete: (student) => {
            dispatch(deleteStudent(student));
        }        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Students);