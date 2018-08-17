import React from 'react';
import {connect} from 'react-redux';
import ClassForm from '../../components/ClassComponents/ClassForm';
import {editClass, getClass, clearCurrentClass} from '../../actions/classAction';
import {getFreeTeachers} from '../../actions/teacherAction';


export class ClassEdit extends React.Component {
    componentDidMount(){
        this.props.getFreeTeachers()
    }
    render(){
        return (
            <div>
                <h1> Editing Class </h1>
                <ClassForm 
                    currentClass = {this.props.currentClass}
                    handleEdit = {this.props.handleEdit}
                    getClass = {this.props.getClass}
                    classId = {this.props.match.params.id}
                    freeTeachers = {this.props.freeTeachers}
                    classes = {this.props.classes}
                    clearCurrentClass = {this.props.clearCurrentClass}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        currentClass: state.classReducer.currentClass,
        freeTeachers: state.teacherReducer.freeTeachers,
        classes: state.classReducer.classes

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getClass: (id) => {
            dispatch(getClass(id));
        },
        handleEdit: (id,name, teacherId) => {
            dispatch(editClass(id ,name, teacherId));
        },
        clearCurrentClass: ()=> {
            dispatch(clearCurrentClass());
        },
        getFreeTeachers: () =>{
            dispatch(getFreeTeachers());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassEdit);