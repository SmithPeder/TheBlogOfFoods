import React from 'react';
import style from '../styles.css';
import Content from './Card.jsx';

export default class Section<Props> extends React.Component {
  constructor(props) {
    super(props);
    this.state = { day: String };
  }

  render() {
    return this.props.children;
  }
}
