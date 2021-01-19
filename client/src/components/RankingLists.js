import React from 'react';

import RankingList from './RankingList';
import UserListModal from './UserListModal';
import OtherLists from './OtherLists';

import './RankingLists.css';

class RankingLists extends React.Component {
    state = {
        showUserListModal: false,
        mylist: null,
        mylistURL: null
    }

    renderRankLists = () => {
        return (
            <React.Fragment>
                {this.state.mylist && <div className="rank-list"><RankingList key="ml" title={this.state.mylist} url={this.state.mylistURL}/></div>}
                <div className="rank-list"><RankingList key="tpc" title="The People's Champ" url="community"/></div>
                <div className="rank-list"><RankingList key="br" title="Boxrec" url="rankings/boxrec"/></div>
                <div className="rank-list"><RankingList key="tbrb" title="TBRB" url="rankings/tbrb"/></div>
                <div className="rank-list"><RankingList key="ring" title="The Ring" url="rankings/thering"/></div>
            </React.Fragment>
        )
    }

    toggleModal = (e) => {
        e.preventDefault();
        this.setState({showUserListModal: !this.state.showUserListModal});
    }

    onLoadUserSubmit = (e, val) => {
        e.preventDefault();
        this.setState({ 
            mylist: `${val}'s list`,
            mylistURL: `userlist/${val}`,
            showUserListModal: false
        });
    }

    onNewUserSubmit = (userID) => {
        this.setState({ 
            mylist: `${userID}'s list`,
            mylistURL: `userlist/${userID}`,
            showUserListModal: false
        });
    }

    render() {
        return (
            <div>
                <button className="button is-text create-button" onClick={this.toggleModal}>Create / Load List</button>
                <div className="container rank-list-col">
                    {this.renderRankLists()}
                </div>
                <OtherLists />
                <UserListModal show={this.state.showUserListModal} toggleModal={this.toggleModal} onLoadUserSubmit={this.onLoadUserSubmit} onNewUserSubmit={this.onNewUserSubmit}/>
            </div>
        )
    }
}

export default RankingLists;