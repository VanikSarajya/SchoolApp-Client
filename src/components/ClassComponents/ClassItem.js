import React from 'react';
import {Link} from 'react-router-dom';

export class ClassItem extends React.Component {
    render(){
        return (
            <tr> 
                <td> {this.props.class.id} </td>
                <td> {this.props.class.name} </td>
                <td> {this.props.class.teacher.firstName} {this.props.class.teacher.lastName} </td>
                <td> <Link to={"/admin/classes/edit/" + this.props.class.id } ><button 
                        className="btn btn-primary"
                    > Edit 
                    </button> 
                    </Link>
                    <button 
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target={"#deleteClass" + this.props.class.id}
                    > Delete 
                    </button> 
                </td>
                <div id={"deleteClass"+this.props.class.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Deleting Class</h4>
                            </div>
                            <div className="modal-body">
                                <p> Are you sure about  deleting {this.props.class.name} class ? </p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.handleDelete(this.props.class)} type="button" className="btn btn-danger" data-dismiss="modal"> Delete </button>
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