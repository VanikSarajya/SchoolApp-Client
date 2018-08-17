import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/home.css';

export class Home extends React.Component {
    render(){
        return (
            <div className="home">
                <div className="header">
                    <h1>Welcome</h1>
                    <div className="bar">
                        <Link to="/login">Login as Admin</Link>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Home;