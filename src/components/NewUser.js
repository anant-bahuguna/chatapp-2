import React, { Component } from "react";
import fire from "../scripts/fire";
import M from 'materialize-css'

class NewUser extends Component {
    componentDidMount() {
        
        
    }
  _newUser() {
    const docData = {
      email: this.props.store.LoginInfo.user.email,
      groups: [],
      userName: document.getElementById("icon_prefix").value
    };
    
    const db = fire.firestore();
    db.collection("Users")
      .add(docData)
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  render() {
    return (
      <div>
        <div className='row'>
            <h3>New User</h3>
          <form className='col s12 '>
            <div className='row'>
              <div className='input-field col s6'>
                <i className='material-icons prefix'>account_circle</i>
                <input id='icon_prefix' type="text" className='validate' />
                <label htmlFor='icon_prefix'>User Name</label>
              </div>
            </div>
          </form>
        </div>

        <button onClick={() => this._newUser()}
          className='btn waves-effect waves-light'>
          Submit
          <i className='material-icons right'>send</i>
        </button>
      </div>
    );
  }
}

export default NewUser;
