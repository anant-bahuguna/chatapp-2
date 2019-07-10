import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'




class Header extends Component {
    render() {
        const {store} = this.props.store
        return (
            <nav>
                <div className="nav-wrapper indigo darken-1">
                <a href="#" className="brand-logo">{this.props.myText}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={{pathname: '/profile',store: {store}}}>Profile</Link></li>
                   
                    <li><Link to={{pathname: '/',store: {store}}}>Home</Link></li>
                    
                    <li><Modal store={store}/></li>
                </ul>
                </div>
             </nav>
        )
    }
}

export default Header