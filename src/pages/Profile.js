import React, { Component } from 'react'
import LoginButton from '../components/LoginButton'
import Header from '../components/Header'
import { observer } from 'mobx-react';


@observer
class Profile extends Component {
    componentDidMount() {
        const {store} = this.props
        store.changePage('Profile')
        console.log(store.currentPage);
    }
    render() {
        const {store} = this.props
        return (
            <div>
                <Header myText={store.currentPage} store={store} />
                <LoginButton store={store} showProfile = {true} />
            </div>
        )
    }
}

export default Profile
