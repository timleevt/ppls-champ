import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import RankingLists from './RankingLists';
import Header from './Header';
import MyListModal from './MyListModal';

const App = () => {
    return (
        <div className="container">
            <Router>
                <Header />
                <RankingLists />
                <Switch>
                    <Route path="/userlist" exact component={MyListModal} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;