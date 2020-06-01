import React from 'react';
import axios from 'axios';

class RankingList extends React.Component {
    state = {
        ranking: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/${this.props.url}`)
          .then(res => {
            //Handle user generated lists
            if(this.props.url.includes("userlist")) {
                let data = res.data;
                const ranking = [];
                for (const property in data) {
                    if(property.includes("rank")) {
                        // this may not be ordered properly so might have to
                        ranking.push(data[property]);
                    }
                }
                this.setState({ ranking });
            } else {
            // Handle pre-made ranking list responses
                const ranking = res.data.slice(0,10);
                this.setState({ ranking });
            }
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