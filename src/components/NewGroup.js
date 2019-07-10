import React, { Component } from 'react'
import fire from '../scripts/fire'

 class NewGroup extends Component {
     state = {
         groupData: {
             gId: '',
             groupName: '',
             members: []
         }
         
     }
     _createGroup() {
         const {store} = this.props
         const db = fire.firestore();
         let Count = 0;
         db.collection('Groups')
         .get()
         .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                Count+=1;
            })
         })
         const groupId = Math.random()
         this._addGroup();
     }
     _addGroup() {
         const {store} = this.props;
         const db = fire.firestore();
         db.collection('Groups')
         .add(this.state.groupData)
         .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
         
     }
     
    render() {
        const {store} = this.props
        return (
            <div>
                
                <div className='row'>
                    <form className='col s12 '>
                        <div className='row'>
                        <div className='input-field col s6'>
                            <i className='material-icons prefix'>account_circle</i>
                            <input id='icon_prefix' type="text" className='validate' />
                            <label htmlFor='icon_prefix'>Group Name</label>
                        </div>
                        </div>
                    </form>
                </div>
        
            </div>
        )
    }
}

export default NewGroup
