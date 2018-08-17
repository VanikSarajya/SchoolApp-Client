import React from 'react';
import {connect} from 'react-redux';
import {getTeachers, deleteTeacher} from '../../actions/teacherAction';
import TeacherList from '../../components/TeacherComponents/TeacherList';

export class Teachers extends React.Component {
    componentDidMount(){
        this.props.getTeachers();
    }
    render () {
        return (
            <TeacherList
                teachers = {this.props.teachers}
                message = {this.props.message}
                handleDelete = {this.props.handleDelete}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message:state.teacherReducer.message,
        teachers:state.teacherReducer.teachers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTeachers: () => {
            dispatch(getTeachers());
        },
        handleDelete: (teacher) => {
            dispatch(deleteTeacher(teacher));
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Teachers);