import React from 'react';
import {connect} from 'react-redux';
import StudentForm from '../../components/StudentComponents/StudentForm';
import { addStudent } from '../../actions/studentAction';
import {getClasses} from '../../actions/classAction';

export class StudentAdd  extends React.Component {
    componentDidMount(){
        this.props.getClasses()
    }
    render(){
        return(
            <div> 
                <h1> Adding Student </h1>
                <StudentForm 
                    classes = {this.props.classes}
                    handleAdd = {this.props.handleAdd}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        classes: state.classReducer.classes,
        students: state.studentReducer.students
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (firstName, lastName, classId) => {
            dispatch(addStudent(firstName,lastName,classId));
        },
        getClasses: ()=> {
            dispatch(getClasses());
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentAdd);