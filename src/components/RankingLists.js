import React from 'react';

import RankingList from './RankingList';
import UserListModal from './UserListModal';

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
                {this.state.mylist && <div className="yaha column"><RankingList key="ml" title={this.state.mylist} url={this.state.mylistURL}/></div>}
                <div className="yaha column"><RankingList key="tpc" title="The People's Champ" url="community"/></div>
                <div className="yaha column"><RankingList key="br" title="Boxrec" url="rankings/boxrec"/></div>
                <div className="yaha column"><RankingList key="tbrb" title="TBRB" url="rankings/tbrb"/></div>
                <div className="yaha column"><RankingList key="ring" title="The Ring" url="rankings/thering"/></div>
            </React.Fragment>
        )
    }

    toggleModal = (e) => {
        e.preventDefault();
        this.setState({showUserListModal: !this.state.showUserListModal})
    }

    onLoadUserSubmit = (e, val) => {
        e.preventDefault();
        this.setState({ 
            mylist: `${val}'s list`,
            mylistURL: `userlist/${val}`,
            showUserListModal: false 
        });
    }

    render() {
        return (
            <div className="is-centered">
                <div className="columns">
                    {this.renderRankLists()}
                </div>
                <div>
                    <button className="button is-large is-info is-fullwidth" onClick={this.toggleModal}>
                        Create/Load your own list!
                    </button>
                </div>
                <UserListModal show={this.state.showUserListModal} toggleModal={this.toggleModal} onLoadUserSubmit={this.onLoadUserSubmit}/>
            </div>
        )
    }
}

export default RankingLists;