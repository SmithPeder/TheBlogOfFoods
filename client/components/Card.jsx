import React from 'react';
import style from '../styles.css';
import Content from './Content.jsx';

export default class Card<Props> extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collaped: false };
  }

  collapse() {
    this.setState(state => ({ collaped: !state.collaped }));
  }

  render() {
    return (
      <div className="card" onClick={this.collapse.bind(this)}>
        <div className="cardHeader">
          <h1>{this.props.title}</h1>
          <span className="details">{this.props.time}</span>
        </div>
        {this.state.collaped && (
          <Content>
            <img src={this.props.source} />
          </Content>
        )}
      </div>
    );
  }
}
