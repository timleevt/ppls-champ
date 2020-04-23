import React from 'react';
import { Link } from 'react-router-dom';

class MyList extends React.Component {
    render() {
        return (
            <div className="content">
                <h4>{this.props.title}</h4>
                <Link to="/userlist">Create list</Link>
            </div>
        )
    }
}

export default MyList;