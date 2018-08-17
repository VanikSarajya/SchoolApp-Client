import React from 'react';
import {connect} from 'react-redux';
import { Route , Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import Login from './Login';
import Error from '../components/Error';
import Home from '../components/Home';
import Admin from '../components/Admin';
import PrivateRoute from '../components/PrivateRoute';
import { authenticate, getUserData } from '../actions/loginAction';
import history from '../history';


export class App extends React.Component {
    componentDidMount(){
        this.props.getUserData(localStorage.getItem('jwtToken'));
    }
    render(){
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <PrivateRoute  
                        path="/admin"
                        component={()=>{
                            return (
                                <Admin
                                    firstName = {this.props.firstName}
                                    lastName = {this.props.lastName}
                                    email = {this.props.email}
                                />
                            )}} 
                        extraProps = {{

                        }}
                    />
                    <Route  path="/login" exact component={Login}/>
                    <Route component={Error}/>
                </Switch>
            </ConnectedRouter> 
        );    
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        email: state.loginReducer.email,
        firstName: state.loginReducer.firstName,
        lastName: state.loginReducer.lastName,
        authChecked: state.loginReducer.authChecked
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (token) => {
            dispatch(authenticate(token));
        },
        getUserData: (token) => {
            dispatch(getUserData(token));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);