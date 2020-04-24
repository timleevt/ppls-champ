import React from 'react';
import axios from 'axios';

class RankingList extends React.Component {
    state = {
        ranking: []
    }

    componentDidMount() {
        /* Fetch ranking list from url and save the first 10 into state */
        axios.get(`http://127.0.0.1:5000/rankings/${this.props.url}`)
          .then(res => {
            const ranking = res.data.slice(0,10);
            this.setState({ ranking });
          })
      }
    
    render() {
        return (
            <div className="content">
                <h4>{this.props.title}</h4>
                <ol>
                    {this.state.ranking.map((person,index) => <li key={index}>{person}</li>)}
                </ol>
            </div>
        )
    }
}

export default RankingList;