import React from 'react';
import {connect} from 'react-redux';
import {editTeacher, getTeacher, clearCurrentTeacher} from '../../actions/teacherAction';
import TeacherForm from '../../components/TeacherComponents/TeacherForm';

export class TeacherEdit extends React.Component {
    render(){
        return(
            <div>
                <h1> Editing Teacher </h1>
                <TeacherForm
                    currentTeacher = {this.props.currentTeacher}
                    handleEdit = {this.props.handleEdit}
                    clearCurrentTeacher = {this.props.clearCurrentTeacher}
                    teacherId={this.props.match.params.id}
                    getTeacher ={this.props.getTeacher}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentTeacher: state.teacherReducer.currentTeacher
    }
}


const mapDispatchToProps = (dispatch)=> {
    return {
        handleEdit: (firstName, lastName, id) => {
            dispatch(editTeacher(firstName,lastName, id));
        },
        getTeacher: (id) => {
            dispatch(getTeacher(id));
        },
        clearCurrentTeacher: ()=> {
            dispatch(clearCurrentTeacher());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeacherEdit);