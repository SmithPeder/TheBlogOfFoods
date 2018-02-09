import React from 'react';
import style from '../styles.css';

export default class Container<Props> extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="containerHeader">
          <span className="date">{this.props.date}</span>
          <span>{this.props.title}</span>
          <img src={this.props.source} width="35px" height="35px" />
        </div>
        {this.props.children}
      </div>
    );
  }
}
