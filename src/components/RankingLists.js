import React from 'react';
import axios from 'axios';

import RankingList from './RankingList';
import UserListModal from './UserListModal';

class RankingLists extends React.Component {
    state = {
        showUserListModal: false,
        mylist: null,
        mylistURL: null
    }

    renderRankLists = () => {
        return (
            <React.Fragment>
                {this.state.mylist && <div className="column"><RankingList key="ml" title={this.state.mylist} url={this.state.mylistURL}/></div>}
                <div className="column"><RankingList key="tpc" title="The People's Champ" url="rankings/tbrb"/></div>
                <div className="column"><RankingList key="br" title="Boxrec" url="rankings/boxrec"/></div>
                <div className="column"><RankingList key="tbrb" title="TBRB" url="rankings/tbrb"/></div>
                <div className="column"><RankingList key="ring" title="The Ring" url="rankings/thering"/></div>
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
                    <a className="button is-large is-info is-fullwidth" href="#" onClick={this.toggleModal}>
                        Create/Load your own list!
                    </a>
                </div>
                <UserListModal show={this.state.showUserListModal} toggleModal={this.toggleModal} onLoadUserSubmit={this.onLoadUserSubmit}/>
            </div>
        )
    }
}

export default RankingLists;