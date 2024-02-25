import React, { Component } from "react";
import ModalWindow from "../Modal/Modal";

export default class Header extends Component {
  state = {
    modal: false,
  };
  showModal = () => {
    this.setState((prev) => ({ modal: !prev.modal }));
  };

  render() {
    // const props = this.props;
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="google.com">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav"></div>

            <button onClick={this.showModal}>Modal</button>
            {this.state.modal && <ModalWindow showModal={this.showModal} />}
          </div>
        </div>
      </nav>
    );
  }
}
