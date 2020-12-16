import React, { Component } from 'react';
import { Modal, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";
import withAuth from "../../HOC/withAuth";

class Login extends Component {
  render() {
    const { showLoginModal, toggleLoginModal } = this.props;
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={toggleLoginModal}
        >
          Login
        </button>
        <Modal isOpen={showLoginModal} toggle={toggleLoginModal}>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default withAuth(Login);
