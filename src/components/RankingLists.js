import React from 'react';

import RankingList from './RankingList';

const RankingLists = () => {
    return (
        <div className="columns">
            <div className="column"><RankingList title="My List"/></div>
            <div className="column"><RankingList title="People's Champ"/></div>
            <div className="column"><RankingList title="Boxrec"/></div>
            <div className="column"><RankingList title="TBRB"/></div>
            <div className="column"><RankingList title="The Ring"/></div>
        </div>
    )
}

export default RankingLists;