import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export default class Modal extends Component {
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleKeyDown);
  }
  render() {
    return (
      <Overlay>
        <ModalWindow>
          <img src={this.props.largeImageURL} alt="" width="700" />
        </ModalWindow>
      </Overlay>
    );
  }
}
