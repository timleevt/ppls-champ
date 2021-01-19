import React from 'react';
import './OtherLists.css';

const OtherLists = () => {
    const lists = {
        espn: 'https://www.espn.com/boxing/story/_/id/30335986/pound-pound-terence-crawford-king-gervonta-davis-makes-move',
        cbssports: 'https://www.cbssports.com/boxing/news/boxing-pound-for-pound-rankings-tyson-fury-becomes-a-crossover-star-in-grabbing-heavyweight-title/',
        complex: 'https://www.complex.com/sports/best-pound-for-pound-boxers-ranked/',
        forbes: 'https://www.forbes.com/sites/joshkatzowitz/2020/04/07/the-10-best-pound-for-pound-fighters-in-boxing-april-2020/#1ed140324d2d'
    }

    var listItem = Object.keys(lists).map(function(key) {
        return <li key={key} className="other-list-item"><a href={lists[key]}>{key}</a></li>
    });

    return (
        <div className="container content other-list-container">
            <h2>Misc. Lists</h2>
            <ul className="other-list">
                { listItem }
            </ul>
        </div> 
    )
}

export default OtherLists;