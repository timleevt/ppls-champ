import React from 'react';
import ReactDOM from 'react-dom';

import UserListForm from './UserListForm';

const MyListModal = props => {
    return ReactDOM.createPortal(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <UserListForm />
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default MyListModal;