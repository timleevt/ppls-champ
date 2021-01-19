import React from 'react';

import RankingLists from './RankingLists';
import Header from './Header';

import './App.css';

function App() {
    return (
        <div className="container">
            <Header />
            <RankingLists />
        </div>
    )
}

export default App;