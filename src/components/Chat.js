import React, { Component } from "react";
import fire from "../scripts/fire.js";
import Header from "./Header";
import LoginButton from "./LoginButton";

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

  componentDidMount() {

    
    fire
      .database()
      .ref("messages")
      .on("child_added", snapshot => {
        let message = this.state.msg;
        message.push(snapshot.val());
        this.setState({
          msg: message
        });
      });
    //   this.scrollToBottom(this.state.msg.length)
  }
//   scrollToBottom= (ref) => {
//     this.refs[ref].scrollIntoView({ behavior: "smooth" });
//   }
  // _addUser() {
  //     fire.database().ref('users').push().set({
  //                 name: 'Coding',
  //                 age: 19
  //             })
  // }
  _send() {
    fire
      .database()
      .ref("messages")
      .push()
      .set({
        body: this.state.inputChat,
        author: this.props.store.LoginInfo.user.displayName
      });
  }
  
  render() {
    const {store} = this.props
    return (
      <div>
          <Header myText='CHAT APP' />
        <div className='container'>
          <LoginButton showProfile={false} store={store}/> 
        <br />
        <br />
        <div>
          {this.state.msg.length !== 1 ? (
            this.state.msg.map((message, i) => {
              return i != 0 ? (
                <div className='row ' key={i} ref={i}>
                  <div className='col s12 m4 l4'>
                    <div className='card-panel teal'>
                      <span className='white-text'>
                        {message.body}
                        -- <strong>{message.author}</strong>
                      </span>
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
        <div className="row">
            <span className="input-field col m8">
                <textarea className='materialize-textarea'
                id='inputBox'
                onChange={e =>
                    this.setState({
                    inputChat: e.target.value
                    })
                }
                />
            </span>
            <span className='col offset-m1'>
                <button onClick={() => this._send()} className='btn-floating btn-medium waves-effect waves-light red'><i className="material-icons">send</i></button>
            </span>   
            
        </div> 
      </div>
      </div>
      
    );
  }
}

export default Chat;
