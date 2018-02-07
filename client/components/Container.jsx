import React from 'react';
import style from '../styles.css';

export default class Container<Props> extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="containerHeader">
          {this.props.title}
          <img src="../food.png" width="35px" height="35px" />
        </div>
        {this.props.children}
      </div>
    );
  }
}
