import React from 'react';
import axios from 'axios';

class UserListForm extends React.Component {
    state = {
        boxrecList: []
    }

    componentDidMount() {
        /* Fetch ranking list from url and save the first 10 into state */
        axios.get(`http://127.0.0.1:5000/rankings/boxrec`)
          .then(res => {
            const rankings = res.data;
            this.setState({ boxrecList: rankings });
          })
      }
    
    renderRankSelectOption = () => {
        if(this.state.boxrecList) {
            return this.state.boxrecList.map((boxer, index) => <option key={index}>{boxer}</option>)
        }
    }

    renderRankSelect = () => {
        if(this.state.boxrecList) {
            const rankSelectList = []
            for(let i = 1; i <= 10; i++) {
                rankSelectList.push(
                    <div key={i} className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Rank #{i}</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <div className="select">
                                        <select name={`rank_${i}`}>{this.renderRankSelectOption()}</select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return rankSelectList;
        }
        return <div>Loading..</div>
    }

    // Submit new list creation
    onNewUserListFormSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post(`http://127.0.0.1:5000/testpost`,
            data
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
        console.log('well.. something happened.');
    }

    onLoadUserSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log('Do some get request here I suppose..');
        console.log(data);
    }

    render() {
        return (
            <div className="field">
                {/* Form for loading already existing list */}
                <form onSubmit={this.onLoadUserSubmit}>
                    <p className="help">Have a list already? Load it here</p>
                    <div className="field has-addons">
                        <div className="control is-expanded">
                            <input name="userID" className="input" type="text" placeholder="User ID" />
                        </div>
                        <div className="control">
                            {/* This isn't working as a submit button for some reason */}
                            <a className="button is-info">Load</a> 
                        </div>
                    </div>
                </form>
                <hr />
                {/* Form for new list creation */}
                <form onSubmit={this.onNewUserListFormSubmit}>
                    <div className="field">
                        <label className="label">Create your list</label>
                    </div>
                    <div className="field">
                        <input name="userID" className="input" type="text" placeholder="User ID" />
                    </div>
                    <div className="field">
                        {this.renderRankSelect()}
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserListForm;