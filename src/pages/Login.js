import React, { Component } from "react";
import LoginButton from "../components/LoginButton";
import { observer } from "mobx-react";
import fire from "../scripts/fire";
import Users from '../components/Users'




@observer
class Login extends Component {
  state = {
    userEmail: ''
  }
  _getUser() {
    fire.firestore().collection('Users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc)=>{
        console.log(`${doc.id} => ${doc.data().groups}`)

      })
    })
  }


  componentDidMount() {
    this.props.store.changePage('Login Page')
  }
  

  render() {
      const {store} = this.props
    return (
      <div>
        
        <div className='container'>
          <LoginButton showProfile={true} store={store} />
          {
            store.LoginInfo.isLoggedIn?
            <div>
              <Users store={store}/>
            </div>
            :<div></div>
          }
         
        </div>
      </div>
    );
  }
}

export default Login;
