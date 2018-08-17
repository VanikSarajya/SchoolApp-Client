import React from 'react';
import {Link} from 'react-router-dom';
import CourseItem from './CourseItem';

export class CourseList extends React.Component{
    render(){
        return (
            <div> 
            <h1>Courses</h1>
            <p>{this.props.message}</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Teacher</th>
                        <th>Dates</th>
                        <th>Times</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map((course)=>{
                        return (
                            <CourseItem 
                                course = {course}
                                key ={course.id}
                                deleteCourse = {this.props.deleteCourse}
                            />
                        );
                    })}
                </tbody>
            </table>
            <Link to='/admin/courses/add'> <button className="btn btn-success"> Add Course </button> </Link>
        </div>
        )
    }
}

export default CourseList;