import React, { Component } from "react";
import fire from "../scripts/fire";
import NewUser from './NewUser'
import { observer } from "mobx-react";
import {Link} from 'react-router-dom'

@observer
class Users extends Component {
  state = {
    groupList: [],
    userEmail: "",
    userData: {},
    newUser: false
  };
  componentDidMount() {
    this._getUser();
  }
  _getUser() {
    const {store} = this.props
    const loginEmail = store.LoginInfo.user.email;
    const db = fire.firestore();
    db.collection("Users")
      .where("email", "==", loginEmail)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log(doc.id, " => ", doc.data());
          const grps = this.state.groupList;
          doc.data().groups.forEach(group => {
            grps.push(group.gId);
          });
          this.setState({
            groupList: grps,
            userData: doc.data()
          });
          store.setName(doc.data().userName)
        });
      })
      .catch(()=>{
        console.log("no user found,  Adding user");
        this.setState({
          newUser: true
        })
      });
      if(this.state.userData === {})
      {
        console.log('new user');
        this.setState({
          newUser: true
        })
      }
      else {
        console.log('old user');
      }
  }
  render() {
    const {store} = this.props
    return (
      <div>
        <div >
          
          {
            this.state.newUser?
            <NewUser store={store}/>
            :
            <div className='collection'>

            {this.state.groupList.map(group => {
              return (
                <Link to={{pathname: '/chat',store: {store}}} className='collection-item' key={group} onClick={()=>{store.setGroup(group)}}>
                  <span className='new badge'>4</span>
                  {group}
                </Link>
              );
             })}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Users;
