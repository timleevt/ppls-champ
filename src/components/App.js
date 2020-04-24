import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import RankingLists from './RankingLists';
import Header from './Header';
import UserListModal from './UserListModal';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <Header />
                    <RankingLists />
                </Router>
            </div>
        )
    }
}

export default App;