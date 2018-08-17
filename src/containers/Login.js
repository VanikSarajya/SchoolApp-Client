import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/loginAction'
import isEmail from 'validator/lib/isEmail';
import '../assets/styles/login.css';

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    isValid = (email, password) => {
        return (isEmail(email) && password.length>=6);
    }
    handleChange = (event) => {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return(
            <div className="main">
                <div className="form">  
                    <form onSubmit={(e)=>{ e.preventDefault(); this.props.login(this.state.email,this.state.password);}}>
                        <div className="form-group">
                            <label>
                                Email adress
                            </label>    
                            <input className="form-control" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                        </div> 
                        <div className="form-group">
                            <label>
                                Password
                            </label>    
                            <input className="form-control" type="password" name="password" onChange={this.handleChange}  value={this.state.password} placeholder="Password"/>
                        </div>
                        <input className="btn btn-primary" disabled={!this.isValid(this.state.email,this.state.password)} type="submit" value="Log-In" />
                        <p className="message">{this.props.message}</p>
                    </form> 
                </div>
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn:state.loginReducer.loggedIn,
        message: state.loginReducer.message
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email,password) => {
            dispatch(login(email,password));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
