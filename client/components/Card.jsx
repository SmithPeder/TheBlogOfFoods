import React from 'react';
import style from '../styles.css';
import Content from './Content.jsx';

export default class Card<Props> extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collaped: true };
  }

  collapse() {
    this.setState(state => ({ collaped: !state.collaped }));
    console.log(this.state.collaped);
  }

  render() {
    return (
      <div className="card" onClick={this.collapse.bind(this)}>
        <div className="cardHeader">
          <span>{this.props.title}</span>
          <div>
            <span className="details">{this.props.time}</span>
            <span className="details">{'•'}</span>
            <span className="details">{this.props.date}</span>
            <span className="details">{'•'}</span>
            <span className="details">{this.props.day}</span>
            <img
              src="/client/components/icons/food.png"
              width="35px"
              height="35px"
            />
          </div>
        </div>
        {this.state.collaped && (
          <Content content={this.props.content} list={this.props.list}>
            <img src={this.props.source} />
          </Content>
        )}
      </div>
    );
  }
}
