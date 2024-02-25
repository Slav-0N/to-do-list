import React, { Component } from "react";
import { Modal } from "./Modal.styled";

export default class ModalWindow extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.escCloseModal);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escCloseModal);
  }

  escCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.showModal();
    }
  };

  render() {
    return (
      <Modal>
        <div>
          <button onClick={this.props.showModal}>&times;</button>
          <p>Це модальне вікно!</p>
        </div>
      </Modal>
    );
  }
}
