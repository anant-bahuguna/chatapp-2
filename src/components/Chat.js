import React, { Component } from "react";
import fire from "../scripts/fire.js";
import Header from "./Header";

import firebase from 'firebase';
import { observer } from "mobx-react";


@observer
class Chat extends Component {
  state = {
    msg: [
      {
        author: "",
        body: ""
      }
    ],
    inputChat: ""
  };

  _getGroupName() {
    const { store } = this.props.location.store;
    let gName
    const db = fire.firestore();
    const groupId = store.currentGroup;
    db.collection("Groups")
    .where('gId','==',groupId)
    .get()
    .then(querySnapshot=>{
      querySnapshot.forEach(function(doc){
        console.log(doc.data());
        gName = doc.data().groupName
        store.changePage(gName)
        console.log(gName)
      })
    })
    
  }
  componentDidMount() {


    const { store } = this.props.location.store;
    this._getGroupName()
    
    
    const db = fire.firestore();
    const groupId = store.currentGroup;
    
    
    console.log(groupId);
    db.collection("Groups")
      .where("gId", "==", groupId)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data().messages);
          const dbMessages = doc.data().messages;
          let message = [
            {
              author: "",
              body: ""
            }
          ]
          dbMessages.map(dbMsg => {
            
            message.push(dbMsg);
            
          });
          this.setState({
            msg: message
          });
        });
      });
  }

  _send() {
    const { store } = this.props.location.store;
    const groupId = store.currentGroup;
    const db = fire.firestore();
    const groupData = {
      body: this.state.inputChat,
      author: store.chatName
    };
    const msgData = {
      gId: groupId,
      message: {
        body: this.state.inputChat,
      author: store.chatName
      }
      
    };


    // Create a reference to the Groups collection
var citiesRef = db.collection("Groups").doc('sAlqp3s6x8ubw1kXjEmJ');

// Create a query against the collection.
// var query = citiesRef.where("gId", "==", groupId);

    citiesRef
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(groupData)

      })
     
    db.collection('Messages')
    .add(msgData)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { store } = this.props.location.store;
    
    return (
      <div>
        <Header store={store} myText={store.currentPage}/>
        <div className='container'>
          <br />
          <br />
          <div>
            {this.state.msg.length !== 1 ? (
              this.state.msg.map((message, i) => {
                return i != 0 ? (
                  <div className='row ' key={i}>
                    <div className='col s12 m6 l4'>
                      <div className='card blue-grey darken-1'>
                        <div className='card-content white-text'>
                          <p className='flow-text'>{message.body}</p>
                        </div>
                        <div className='card-action blue-grey lighten-4'>
                          <strong>{message.author}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <br key={i} />
                );
              })
            ) : (
              <br />
            )}
          </div>
          <br />
          <br />
          <div className='row'>
            <span className='input-field col m8'>
              <textarea
                className='materialize-textarea'
                id='inputBox'
                onChange={e =>
                  this.setState({
                    inputChat: e.target.value
                  })
                }
              />
            </span>
            <span className='col offset-m1'>
              <button
                onClick={() => this._send()}
                className='btn-floating btn-medium waves-effect waves-light red'
              >
                <i className='material-icons'>send</i>
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
