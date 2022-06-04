import React, { Component } from 'react';
import Messages from './messages';
import { getMessages } from '../services/fakeMessage';
import eye from "../eye.svg";
class Modal extends Component {
  state = {
    messages: getMessages(),

  }
  handleView = () => {
    const messageText = this.state.messages.find((m) => m.text);
    console.log(messageText);
  }







  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModalScrollable">
          <img src={eye} className="message-eye" alt="eye" />
          View
        </button>


        <div class="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                { }
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;

