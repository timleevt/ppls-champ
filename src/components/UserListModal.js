import React from 'react';

import UserListForm from './UserListForm';

class UserListModal extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <UserListForm key="user-list-form" onLoadUserSubmit={this.props.onLoadUserSubmit}/> 
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.toggleModal}></button>
            </div>
        );
    }
};

export default UserListModal;