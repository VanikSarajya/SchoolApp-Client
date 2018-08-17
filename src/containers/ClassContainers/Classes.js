import React from 'react';
import {connect} from 'react-redux';
import {getClasses, deleteClass} from '../../actions/classAction';
import ClassList from '../../components/ClassComponents/ClassList';

export class Classes extends React.Component {
    componentDidMount(){   
        this.props.getClasses();
    }
    render () {
        return (
            <ClassList
                classes = {this.props.classes}
                message = {this.props.message}
                handleDelete = {this.props.handleDelete} 
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.classReducer.message,
        classes: state.classReducer.classes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getClasses: () => {
            dispatch(getClasses());
        },
        handleDelete: (clas) => {
            dispatch(deleteClass(clas));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
 