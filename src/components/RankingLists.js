import React from 'react';

import RankingList from './RankingList';
import UserListModal from './UserListModal';

class RankingLists extends React.Component {
    state = {
        showUserListModal: false,
        mylist: null
    }

    renderRankLists = () => {
        return (
            <React.Fragment>
                {this.state.mylist && <div className="column"><RankingList key="ml" title={this.state.mylist} url="tbrb"/></div>}
                <div className="column"><RankingList key="tpc" title="The People's Champ" url="tbrb"/></div>
                <div className="column"><RankingList key="br" title="Boxrec" url="boxrec"/></div>
                <div className="column"><RankingList key="tbrb" title="TBRB" url="tbrb"/></div>
                <div className="column"><RankingList key="ring" title="The Ring" url="thering"/></div>
            </React.Fragment>
        )
    }

    toggleModal = (e) => {
        e.preventDefault();
        this.setState({showUserListModal: !this.state.showUserListModal})
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
                <UserListModal show={this.state.showUserListModal} toggleModal={this.toggleModal}/>
            </div>
        )
    }
}

export default RankingLists;