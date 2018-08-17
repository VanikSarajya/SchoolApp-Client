import React from 'react';
import {Link} from 'react-router-dom';
import ClassItem from './ClassItem';

export class ClassList extends React.Component {
    render(){
        return (
            <div className="classes">
            <h1>Classes</h1>
            <p>{this.props.message}</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Teacher</th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.classes.map((clas) => {
                        return (
                            <ClassItem 
                                key = {clas.id}
                                class = {clas}
                                handleDelete = {this.props.handleDelete}
                            />
                        );    
                    })}
                </tbody>
            </table>
            <Link to="/admin/classes/add"><button type="button" className="btn btn-success">Add Class</button></Link>
        </div>
        )
    }
}

export default ClassList;