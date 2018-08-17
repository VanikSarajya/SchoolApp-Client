import React from 'react';
import {connect} from 'react-redux';
import ClassForm from '../../components/ClassComponents/ClassForm';
import { addClass } from '../../actions/classAction';
import {getFreeTeachers} from '../../actions/teacherAction';

export class ClassAdd extends React.Component {
    componentDidMount(){
        this.props.getFreeTeachers()
    }
    render(){
        return (
            <div>
                <h1> Adding Class </h1>
                <ClassForm 
                    handleAdd = {this.props.handleAdd}
                    freeTeachers = {this.props.freeTeachers}
                    classes = {this.props.classes}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        freeTeachers: state.teacherReducer.freeTeachers,
        classes: state.classReducer.classes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (name, teacherId) => {
            dispatch(addClass(name,teacherId));
        },
        getFreeTeachers: () =>{
            dispatch(getFreeTeachers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassAdd);