import React from 'react';

import RankingLists from './RankingLists';
import Header from './Header';

const App = () => {
    return (
        <div className="container">
            <Header />
            <RankingLists />
        </div>
    );
}

export default App;