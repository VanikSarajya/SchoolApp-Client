import React from 'react';
import {Link} from 'react-router-dom';
import history from '../../history';

export class StudentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            classId: "",
            inputErrors: {}
        }
    }

    componentDidMount(){
        if(this.props.studentId){
            this.props.getStudent(this.props.studentId)
        }
    }

    componentDidUpdate(){
        if (this.props.currentStudent) {
            this.setState({
                firstName: this.props.currentStudent.firstName,
                lastName: this.props.currentStudent.lastName,
                classId: this.props.currentStudent.classId
            });
            this.props.clearCurrentStudent()
        }
    }

    validateInput = () => {
        let isValid = true;
        let inputErrors = {};

        if(!this.state.firstName){
            isValid = false;
            inputErrors.firstName = "First name required";
        } else if(this.state.firstName.length < 3 || this.state.firstName.length > 60){
            isValid = false;
            inputErrors.firstName = "First name must contain from 3 to 60 characters"
        } else if(typeof this.state.firstName !== "undefined"){
            if(!this.state.firstName.match(/^[a-zA-Z ]+$/)){
               isValid = false;
               inputErrors.firstName = "Only letters allowed";
            }        
        }

        if(!this.state.lastName){
            isValid = false;
            inputErrors.lastName = "Last name required";
        } else if(this.state.lastName.length < 3 || this.state.lastName.length > 60){
            isValid = false;
            inputErrors.lastName = "Last name must contain from 3 to 60 characters"
        } else if(typeof this.state.lastName !== "undefined"){
            if(!this.state.lastName.match(/^[a-zA-Z ]+$/)){
               isValid = false;
               inputErrors.lastName = "Only letters allowed";
            }        
        }

        if(!this.state.classId){
            isValid = false;
            inputErrors.classId = "Class required";
        }

        this.setState({inputErrors})
        return isValid;
    }
    handleChange = (event) => {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    }
    handleClick = () => {
        if(this.validateInput()){
            if (this.props.handleAdd){
                this.props.handleAdd(this.state.firstName,this.state.lastName, this.state.classId);
            } else {
                this.props.handleEdit(this.props.studentId, this.state.firstName, this.state.lastName, this.state.classId);
            }
            history.push('/admin/students');
        }
    }
    render(){
        return (
            <div> 
                <form>
                    First Name
                    <input type="text" value={this.state.firstName} onChange={this.handleChange} name="firstName" className="form-control"/>
                    <p className='error'> {this.state.inputErrors.firstName} </p>
                    Last Name
                    <input type="text" value={this.state.lastName} onChange={this.handleChange} name="lastName"  className="form-control"/>
                    <p className='error'> {this.state.inputErrors.lastName} </p>
                    Class 
                    <select name="classId" value={this.state.classId} onChange={this.handleChange} className="form-control">
                        {this.props.studentId ? "" : <option>Select Class </option>}
                        {this.props.classes.map((clas)=> {
                            return (
                                <option value={clas.id}> {clas.name} </option>
                            )
                        })}
                    </select>
                    <p className='error'> {this.state.inputErrors.classId} </p>
                </form>
                <button onClick={this.handleClick} type="button" className="btn btn-primary"> Save </button>
                <Link to='/admin/students'><button type="button" className="btn btn-default">Cancel</button></Link>
            </div>
        )
    }
}

export default StudentForm;