import React from 'react';
import {Link} from 'react-router-dom';
import StudentItem from './StudentItem';

export class StudentList extends React.Component {
    render(){
        return (
            <div>
                <h1>Students</h1>
                <p>{this.props.message} </p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Class</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map((student) => {
                            return (
                                <StudentItem 
                                    key = {student.id}
                                    student = {student}
                                    handleDelete = {this.props.handleDelete}
                                />
                            );    
                        })}
                    </tbody>
                </table>
                <Link to='/admin/students/add'><button type="button" className="btn btn-success">Add Student</button></Link>
            </div>
        )
    }
}

export default StudentList;