import React from 'react';
import {Router, Route, Switch } from 'react-router';
import Navbar from './Navbar';
import Classes from '../containers/ClassContainers/Classes';
import ClassEdit  from '../containers/ClassContainers/ClassEdit';
import ClassAdd from '../containers/ClassContainers/ClassAdd';
import Teachers from '../containers/TeacherContainers/Teachers';
import TeacherAdd from '../containers/TeacherContainers/TeacherAdd';
import TeacherEdit from '../containers/TeacherContainers/TeacherEdit';
import Students from '../containers/StudentContainers/Students';
import StudentAdd from '../containers/StudentContainers/StudentAdd';
import StudentEdit from '../containers/StudentContainers/StudentEdit';
import Courses from '../containers/CourseContainers/Courses';
import CourseAdd from '../containers/CourseContainers/CourseAdd';
import CourseEdit from '../containers/CourseContainers/CourseEdit';
import history from '../history';
import '../assets/styles/admin.css';


export class Admin extends React.Component {
    render(){
        return (
            <Router history={history}>
                <div className="admin">
                    <div className="sidebar">
                        <Navbar 
                            firstName = {this.props.firstName}
                            lastName = {this.props.lastName}
                            email = {this.props.email}
                        />
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/admin/classes" exact component={Classes}/> 
                            <Route path="/admin/classes/add" exact component={ClassAdd}/>
                            <Route path="/admin/classes/edit/:id" exact component={ClassEdit}/>
                            <Route path="/admin/students" exact component={Students}/>
                            <Route path="/admin/students/add" exact component={StudentAdd}/>
                            <Route path="/admin/students/edit/:id" exact component={StudentEdit} />
                            <Route path="/admin/teachers" exact component={Teachers}/>
                            <Route path="/admin/teachers/add" exact component={TeacherAdd} />
                            <Route path="/admin/teachers/edit/:id" exact component={TeacherEdit}/>
                            <Route path="/admin/courses" exact component={Courses} />
                            <Route path="/admin/courses/add" exact component={CourseAdd} />
                            <Route path="/admin/courses/edit/:id" exact component={CourseEdit}/>
                        </Switch> 
                    </div> 
                </div>       
            </Router>           
        );
    }
}

export default Admin;