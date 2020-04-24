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
                        {/* Remember to give this a unique key later.. */}
                        <UserListForm key="user-list-form"/> 
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.toggleModal}></button>
            </div>
        );
    }
};

export default UserListModal;