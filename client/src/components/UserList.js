import React from 'react';

class UserList extends React.Component {
    state = {
        showMyListModal: false
    }

    render() {
        return (
            <div className="content">
                <h4>{this.props.title}</h4>
                
            </div>
        )
    }
}

export default UserList;