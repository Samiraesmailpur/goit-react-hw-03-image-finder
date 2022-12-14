import { Component } from 'react';
import { Btn } from './Button.styled';

// export const Button = ({ handleClick }) => {
//   return <Btn onClick={handleClick}>Load More</Btn>;
// };

export default class Button extends Component {
  render() {
    return <Btn onClick={this.props.handleClick}>Load More</Btn>;
  }
}
