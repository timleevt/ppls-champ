import React from 'react';
import axios from 'axios';

class RankingList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
    render() {
        return (
            <div className="content">
                <h4>{this.props.title}</h4>
                <ol>
                    {this.state.persons.map(person => <li>{person.name}</li>)}
                </ol>
            </div>
        )
    }
}

export default RankingList;