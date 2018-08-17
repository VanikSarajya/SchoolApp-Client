import React from 'react';
import {Link} from 'react-router-dom';

export  class TeacherItem extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.teacher.id}</td>
                <td>{this.props.teacher.firstName}</td>
                <td>{this.props.teacher.lastName}</td>
                <td><Link to={'/admin/teachers/edit/' + this.props.teacher.id} ><button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    >
                    Edit
                    </button></Link>
                    <button 
                        className="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target={"#deleteTeacher" + this.props.teacher.id }                  >
                    Delete
                    </button>
                </td>
                <div id={"deleteTeacher"+this.props.teacher.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Deleting Teacher</h4>
                            </div>
                            <div className="modal-body">
                                <p> Are you sure about  deleting {this.props.teacher.firstName} {this.props.teacher.lastName} from teachers? </p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.handleDelete(this.props.teacher)} type="button" className="btn btn-danger" data-dismiss="modal"> Delete </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        );
    }
}

export default TeacherItem;