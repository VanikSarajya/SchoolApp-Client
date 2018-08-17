import React from 'react';
import {Link} from 'react-router-dom';

export class ClassItem extends React.Component {
    render(){
        return (
            <tr> 
                <td> {this.props.student.id} </td>
                <td> {this.props.student.firstName} </td>
                <td> {this.props.student.lastName} </td>
                <td> {this.props.student.class.name} </td>
                <td> <Link to={'/admin/students/edit/'+ this.props.student.id} ><button 
                        className="btn btn-primary"
                    > Edit 
                    </button> </Link>
                    <button 
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target={"#deleteStudent" + this.props.student.id}
                    > Delete 
                    </button> 
                </td>
                <div id={"deleteStudent"+this.props.student.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Deleting Student</h4>
                            </div>
                            <div className="modal-body">
                                <p> Are you sure about  deleting {this.props.student.firstName} {this.props.student.lastName}  ? </p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.handleDelete(this.props.student)} type="button" className="btn btn-danger" data-dismiss="modal"> Delete </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        );

    }
}

export default ClassItem;