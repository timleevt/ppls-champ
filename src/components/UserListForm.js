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
        return this.state.boxrecList.map(boxer => <option>{boxer}</option>)
        }
    }

    renderRankSelect = () => {
        if(this.state.boxrecList) {
            const test = []
            for(let i = 1; i <= 10; i++) {
                test.push(
                    <div class="field">
                        <div class="control">
                            <div class="select">
                                <select>{this.renderRankSelectOption()}</select>
                            </div>
                        </div>
                    </div>
                )
            }
            return test;
        }
        return <div>Loading..</div>
    }

    render() {
        return (
            <div className="field">
                <form>
                    <label>Have a list already? Load it here: </label>
                    <input class="input" type="Username" placeholder="User ID" />
                    <button class="button is-primary">Submit</button>
                </form>
                <hr />
                <form>
                    <label class="label">Create your list</label>
                    {this.renderRankSelect()}
                    <button class="button is-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default UserListForm;