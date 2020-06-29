import React from 'react';

import RankingLists from './RankingLists';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div className="container">
              <Header />
              <RankingLists />
            </div>
        )
    }
}

export default App;