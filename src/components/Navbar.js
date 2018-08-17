import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/pictures/logo.png';
import {logout} from '../actions/loginAction';

export class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div>
                    <img className="logo" alt="logo" src={image}/>
                    <div className = "admin-info" > 
                        <h4> {this.props.firstName} {this.props.lastName}</h4>
                        <p className="email"> {this.props.email}</p>
                    </div> 
                    <ul>
                        <div className="bar">
                            <li><Link to="/admin/classes">Classes</Link></li>
                        </div>
                        <div className="bar">
                            <li><Link to="/admin/students">Students</Link></li>
                        </div>
                        <div className="bar">
                            <li><Link to="/admin/teachers">Teachers</Link></li>
                        </div>
                        <div className="bar">
                            <li><Link to="/admin/courses">Courses</Link></li>
                        </div>
                        <div className="bar">
                            <li><a href="/" onClick={logout}>Log out</a></li>
                        </div>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
