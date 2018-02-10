import React from 'react';
import style from '../styles.css';

export default class Container<Props> extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="containerHeader">
          <span>{this.props.title}</span>
          <div>
            <span className="date">{this.props.date}</span>
            <span className="date">{this.props.day}</span>
            <img src="/client/components/food.png" width="35px" height="35px" />
          </div>
        </div>
        <div className="containerContent">
          {this.props.children} <br />
          <img src={this.props.source} width="60%" height="60%" />
        </div>
      </div>
    );
  }
}
