import React from 'react';
import axios from 'axios';

class UserListForm extends React.Component {
    state = {
        boxrecList: []
    }

    componentDidMount() {
        /* Fetch ranking list from url and save the first 10 into state */
        axios.get(`/rankings/boxrec`)
          .then(res => {
            const rankings = res.data;
            rankings.sort();
            this.setState({ boxrecList: rankings });
        })

        document.getElementById('test-hidden').style.visibility = "hidden";
      }
    
    // Iterates through the state.boxrecList item and returns the HTML "option" tag with each of the values
    renderRankSelectOption = () => {
        if(this.state.boxrecList) {
            let boxerOptions = this.state.boxrecList.map((boxer, index) => <option key={index}>{boxer}</option>);
            boxerOptions.unshift(<option key="default-select" value ="DEFAULT" hidden disabled>Select</option>);
            return boxerOptions;
        }
    }

    // Renders the 10 Select boxes on the screen
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
                                        <select defaultValue={'DEFAULT'} name={`rank_${i}`} required>{this.renderRankSelectOption()}</select>
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

    // Handles submission of a new user list
    onNewUserListFormSubmit = e => {
        e.preventDefault();
        let newUserListObj = {}
        const data = new FormData(e.target);
        let duplicates_exist = false;
        
        for(var pair of data.entries()) {
            let selectContainer = document.getElementsByName(pair[0])[0].parentElement;

            // Clean up form to clear duplicate warnings if they exist
            selectContainer.classList.remove('is-danger');

            // Flag any duplicates and return without making the request if found
            if (Object.values(newUserListObj).indexOf(pair[1]) > -1) {
                selectContainer.classList.add('is-danger');
                duplicates_exist = true;
            }
            newUserListObj[pair[0]] = pair[1];
        }
        if(duplicates_exist) { 
            document.getElementById('test-hidden').style.visibility = "visible";
            return;
        } else {
            // Send the post request to the backend
            axios.post(`/userlist`,
                newUserListObj
            )
            .then(res => {
                console.log(res);
                this.props.onNewUserSubmit(newUserListObj["userID"]);
            })
            .catch(err =>{
                console.log(err);
            }) 
        }
    }

    // Handles loading of existing user list
    onLoadUserSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        this.props.onLoadUserSubmit(e, data.getAll("userID")[0]);
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
                            <button className="button is-link">Load</button>
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
                        <input name="userID" className="input" type="text" placeholder="User ID" required/>
                    </div>
                    
                    <div id="rank-select-container" className="field">
                        {this.renderRankSelect()}
                        <p id="test-hidden" className="help is-danger">Invalid input: duplicate entry</p>
                    </div>
                    
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button onClick={this.props.toggleModal} className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserListForm;