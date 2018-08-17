import React from 'react';
import {Link} from 'react-router-dom';

export class CourseItem extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.course.id} </td>
                <td>{this.props.course.name}</td>
                <td>{this.props.course.class.name}</td>
                <td>{this.props.course.teacher.firstName} {this.props.course.teacher.lastName} </td>
                <td>{this.props.course.startingDate} - <br /> {this.props.course.endingDate}</td>
                <td> {this.props.course.startingTime.slice(0,5)} - {this.props.course.enddingTime.slice(0,5)}</td>
                <td> 
                    <Link to={"/admin/courses/edit/"+ this.props.course.id }><button 
                        className="btn btn-primary"
                    > Edit 
                    </button> 
                    </Link>
                    <button 
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target={"#deleteCourse" + this.props.course.id}
                    > Delete 
                    </button> 
                </td>
                <div id={"deleteCourse"+this.props.course.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Deleting Course</h4>
                            </div>
                            <div className="modal-body">
                                <p> Are you sure about  deleting {this.props.course.name} course ? </p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.deleteCourse(this.props.course.id)} type="button" className="btn btn-danger" data-dismiss="modal"> Delete </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        );
    }
}

export default CourseItem;