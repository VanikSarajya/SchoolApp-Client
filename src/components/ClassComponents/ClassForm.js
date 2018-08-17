import React from 'react';
import {Link} from 'react-router-dom';
import history from '../../history';

export class ClassForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            teacherId: "",
            currentClass: null,
            inputErrors: {}
        }
    }

    componentDidMount(){
        if(this.props.handleEdit){
            this.props.getClass(this.props.classId);
        }
    }

    componentDidUpdate(){
        if (this.props.currentClass) {
            this.props.freeTeachers.push(this.props.currentClass.teacher);
            this.setState({
                name: this.props.currentClass.name,
                teacherId: this.props.currentClass.teacherId,
                currentClass: this.props.currentClass
            });
            this.props.clearCurrentClass()
        }
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
            if(this.props.handleAdd){
                this.props.handleAdd(this.state.name, this.state.teacherId);
            } else {
                this.props.handleEdit(this.props.classId, this.state.name, this.state.teacherId);
            }
            history.push('/admin/classes');
        }
    }
    validateInput = () => {
        let inputErrors = {}
        let isValid = true;

        if(!this.state.name){
            inputErrors.name = "Name required";
            isValid = false;
        } else if (this.state.name.length < 2 || this.state.name.length > 10){
            inputErrors.name = "Name must contain from 2 to 10 characters";
            isValid = false;
        } else if(typeof this.state.name !== "undefined"){
            if(!this.state.name.match(/^[a-zA-Z0-9]+$/)){
               isValid = false;
               inputErrors.name = "Only letters and numbers allowed";
            }        
        }

        if(!this.state.teacherId){
            inputErrors.teacherId = "Teacher required"
            isValid = false;
        }

        this.setState({inputErrors})
        return isValid;
        
    }
    render(){
        return (
            <div>
                <form>
                    Name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
                    <p className="error"> {this.state.inputErrors.name} </p>
                    Teacher
                    <select name="teacherId" value={this.state.teacherId} onChange={this.handleChange} className="form-control">
                        {this.state.currentClass ? 
                        <option value={this.state.currentClass.teacherId}> { this.state.currentClass.teacher.firstName } {this.state.currentClass.teacher.lastName} </option> : 
                        <option> Select Teacher </option>}
                        {this.props.freeTeachers.map((teacher) => {
                            return (
                                <option value={teacher.id}> {teacher.firstName} {teacher.lastName} </option>
                            );
                        })}
                    </select>
                    <p className="error"> {this.state.inputErrors.teacherId} </p>
                </form>
                <button type="button" onClick = {this.handleClick} className="btn btn-primary"> Save </button>
                <Link to="/admin/classes" ><button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button></Link>

            </div>
        );
    }
}

export default ClassForm;