import React, { Component } from 'react'
import M from 'materialize-css'
import NewGroup from './NewGroup'
class Modal extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
        
    }
    render() {
        const {store} = this.props
        return (
            <div>
                <a className="modal-trigger" href="#modal1">New Group</a>

                
                <div id="modal1" className="modal">
                    <div className="modal-content black-text flow-text">
                    <h4>New Group Info</h4>
                    <NewGroup store={store}/>
                    
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
