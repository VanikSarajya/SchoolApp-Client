import React from 'react';
import TeacherItem from './TeacherItem';
import {Link} from 'react-router-dom';

export class TeacherList extends React.Component {
    render(){
        return (
            <div className="teachers">
            <h1>Teachers</h1>
            <p>{this.props.message}</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.teachers.map((teacher) => {
                        return (
                            <TeacherItem 
                                key={teacher.id}
                                teacher={teacher}
                                handleDelete = {this.props.handleDelete}
                            />
                        );    
                    })}
                </tbody>
            </table>
            <Link to='/admin/teachers/add'><button  type="button" className="btn btn-success">Add Teacher</button></Link>

        </div>   
        )
    }
}

export default TeacherList;