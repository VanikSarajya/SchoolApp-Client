import React from 'react';
import {Link} from 'react-router-dom';
import history from '../../history';

export class CourseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            classId: "",
            teacherId: "",
            startingDate: "",
            endingDate: "",
            startingTime: "",
            enddingTime: "",
            inputErrors: {}
        }
    }

    componentDidMount(){
        if(this.props.courseId){
            this.props.getCourse(this.props.courseId)
        }
    }
    componentDidUpdate(){
        if (this.props.currentCourse) {
            this.setState({
                name: this.props.currentCourse.name,
                classId: this.props.currentCourse.classId,
                teacherId: this.props.currentCourse.teacherId,
                startingDate: this.props.currentCourse.startingDate,
                endingDate: this.props.currentCourse.endingDate,
                startingTime: this.props.currentCourse.startingTime,
                enddingTime: this.props.currentCourse.enddingTime

            });
            this.props.clearCurrentCourse();
        }
    }
    handleClick = () => {
        if(this.validateInput()){
            if(this.props.handleAdd){
                this.props.handleAdd(this.state.name,this.state.classId,this.state.teacherId,this.state.startingDate,this.state.endingDate,this.state.startingTime + ":00",this.state.enddingTime+ ":00");
            } else {
                this.props.handleEdit(this.props.courseId,this.state.name,this.state.classId,this.state.teacherId,this.state.startingDate,this.state.endingDate,this.state.startingTime + ":00",this.state.enddingTime+ ":00")
            }
            history.push('/admin/courses');
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    }
    validateInput = () => {
        let isValid = true;
        let inputErrors ={};
        let today = new Date().toISOString().slice(0, 10)
        if(!this.state.name){
            inputErrors.name = "Name required"
            isValid = false;
        } else if (this.state.name.length < 2 || this.state.name.length > 60){
            inputErrors.name = "Name must contain from 2 to 60 characters"
            isValid = false;
        } else if(typeof this.state.name !== "undefined"){
            if(!this.state.name.match(/^[a-zA-Z0-9 ]+$/)){
               isValid = false;
               inputErrors.name = "Only letters and numbers allowed";
            }        
        }
        
        if(!this.state.classId){
            isValid = false;
            inputErrors.classId = "Class required";
        }

        if(!this.state.teacherId){
            isValid = false;
            inputErrors.teacherId = "Teacher required";
        }
        if(!this.state.endingDate){
            isValid = false;
            inputErrors.endingDate = "Ending date required";
        }
        if(!this.state.startingDate){
            isValid = false;
            inputErrors.startingDate = "Starting date required";
        } else if (this.state.startingDate < today){
            isValid = false;
            inputErrors.startingDate = "You can't time travel";
        } else if(this.state.startingDate >= this.state.endingDate){
            isValid = false;
            inputErrors.startingDate = "Starting date must be earlier than ending date"
            inputErrors.endingDate = "Starting date must be earlier than ending date"
        }

        if(!this.state.startingTime){
            isValid = false;
            inputErrors.startingTime = "Starting time required";
        } 

        if(!this.state.enddingTime){
            isValid = false;
            inputErrors.enddingTime = "Ending time required";
        } else if(this.state.enddingTime > "18:00:00" || this.state.startingTime < "08:00:00"){
            isValid = false;
            inputErrors.startingTime = "We start our working day at 8:05 AM and end at 6:00 PM";
            inputErrors.enddingTime = "We start our working day at 8:05 AM and end at 6:00 PM";
        } else if (this.state.startingTime > this.state.enddingTime){
            isValid = false;
            inputErrors.startingTime = "Starting time must be earlier than ending time";
            inputErrors.enddingTime = "Starting time must be earlier than ending time";
        }

        this.setState({inputErrors});
        return isValid;
    }
    render(){
        return(
            <div> 
                <form>
                    Name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
                    <p className="error"> {this.state.inputErrors.name} </p>
                    Class 
                    <select name="classId" value={this.state.classId} onChange={this.handleChange} className="form-control"> 
                        {this.props.courseId ? "" : <option> Select Class </option>}
                        {this.props.classes.map(clas => {
                            return (
                                <option key={clas.id} value={clas.id}> {clas.name} </option>
                            )
                        })}
                    </select>
                    <p className="error"> {this.state.inputErrors.classId}</p>
                    Teacher 
                    <select name="teacherId" value={this.state.teacherId} onChange={this.handleChange} className="form-control"> 
                        {this.props.courseId ? "" : <option> Select Teacher </option>}
                        {this.props.teachers.map(teacher=>{
                            return (
                                <option key={teacher.id} value={teacher.id}> {teacher.firstName} {teacher.lastName} </option>
                            )
                        })}
                    </select>
                    <p className="error">{this.state.inputErrors.teacherId}</p>
                    Starting Date
                    <input name="startingDate" type="date" value={this.state.startingDate} onChange={this.handleChange} className="form-control"/>
                    <p className="error">{this.state.inputErrors.startingDate}</p>
                    Ending Date
                    <input  name="endingDate" type="date" value={this.state.endingDate} onChange={this.handleChange}  className="form-control" />
                    <p className="error">{this.state.inputErrors.endingDate}</p>
                    Starting Time
                    <input  name="startingTime" type="time" value={this.state.startingTime} onChange={this.handleChange}  className="form-control"/>
                    <p className="error">{this.state.inputErrors.startingTime}</p>
                    Ending Time 
                    <input name="enddingTime" type = "time" value={this.state.enddingTime}  onChange={this.handleChange} className="form-control" />
                    <p className="error">{this.state.inputErrors.enddingTime}</p>
                </form>
                <button onClick={this.handleClick} className="btn btn-primary"> Save </button>
                <Link to="/admin/courses" ><button className="btn btn-default"> Cancel </button></Link>
            </div>
        )
    }
}

export default CourseForm;