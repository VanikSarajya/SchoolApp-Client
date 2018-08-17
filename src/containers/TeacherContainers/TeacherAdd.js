import React from 'react';
import TeacherForm from "../../components/TeacherComponents/TeacherForm";
import {connect} from 'react-redux';
import { addTeacher } from '../../actions/teacherAction';

export class TeacherAdd extends React.Component {
    render(){
        return(
            <div>
                <h1> Adding Teacher </h1>
                <TeacherForm 
                    handleAdd = {this.props.handleAdd}
                />
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch)=> {
    return {
        handleAdd: (firstName, lastName) => {
            dispatch(addTeacher(firstName,lastName))
        }
    }
}

export default connect(null,mapDispatchToProps)(TeacherAdd);