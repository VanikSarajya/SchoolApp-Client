import React from 'react';
import {Link} from 'react-router-dom';
import history from '../../history';


export class TeacherForm extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            inputErrors: {}
        }
    }

    componentDidMount(){
        if(this.props.handleEdit){
            this.props.getTeacher(this.props.teacherId);
        }
    }

    componentDidUpdate(){
        if (this.props.currentTeacher) {
            this.setState({
                firstName: this.props.currentTeacher.firstName,
                lastName: this.props.currentTeacher.lastName
            });
            this.props.clearCurrentTeacher()
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
            if (this.props.handleAdd){
                this.props.handleAdd(this.state.firstName,this.state.lastName);
            } else {
                this.props.handleEdit(this.state.firstName,this.state.lastName,this.props.teacherId);
            }
            history.push('/admin/teachers');
        }
    }
    validateInput = () => {
        let isValid = true;
        let inputErrors= {};
        if(!this.state.firstName){
            inputErrors.firstName = "First name required"
            isValid = false
        } else if (this.state.firstName.length < 3 || this.state.firstName.length > 60){
            inputErrors.firstName = "First name must contain from 3 to 60 characters"
            isValid = false;
        } else if(typeof this.state.firstName !== "undefined"){
            if(!this.state.firstName.match(/^[a-zA-Z ]+$/)){
               isValid = false;
               inputErrors.firstName = "Only letters allowed";
            }        
        }

        if(!this.state.lastName){
            inputErrors.lastName = "Last name required"
            isValid = false
        } else if (this.state.lastName.length < 3 || this.state.lastName.length > 60){
            inputErrors.lastName = "Last name must contain from 3 to 60 characters"
            isValid = false;
        } else if(typeof this.state.lastName !== "undefined"){
            if(!this.state.lastName.match(/^[a-zA-Z ]+$/)){
               isValid = false;
               inputErrors.lastName = "Only letters allowed";
            }        
        }
        this.setState({inputErrors})
        return isValid;
    }
    render(){
        return(
            <div> 
                <form>
                    First name
                    <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}className="form-control" placeholder="First name"/>
                    <p className="error">{this.state.inputErrors.firstName}</p>
                    Last name
                    <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} className="form-control" placeholder="Last name"/>
                    <p className="error">{this.state.inputErrors.lastName}</p>
                </form>
                <button type="button"  onClick={this.handleClick} className="btn btn-primary"> Save </button>
                <Link to="/admin/teachers/"><button type="button"  className="btn btn-default">Cancel</button></Link>
                
            </div>
        );
    }
}

export default TeacherForm;