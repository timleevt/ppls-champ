import React from 'react';

import RankingList from './RankingList';
import MyList from './MyList';

const RankingLists = () => {
    return (
        <div className="columns">
            <div className="column"><MyList title="User List"/></div>
            <div className="column"><RankingList title="People's Champ" url="tbrb"/></div>
            <div className="column"><RankingList title="Boxrec" url="boxrec"/></div>
            <div className="column"><RankingList title="TBRB" url="tbrb"/></div>
            <div className="column"><RankingList title="The Ring" url="thering"/></div>
        </div>
    )
}

export default RankingLists;