import React from 'react';
import style from '../styles.css';
import Content from './Content.jsx';

export default class Card<Props> extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collaped: true, max: '30px' };
  }

  collapse() {
    this.state.collaped = !this.state.collaped;
    this.state.collaped
      ? this.setState({ max: '30px' })
      : this.setState({ max: '400px' });
    console.log(this.state.max);
  }

  render() {
    return (
      <div
        className="card"
        style={{ maxHeight: this.state.max }}
        onClick={this.collapse.bind(this)}
      >
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
        <Content content={this.props.content} list={this.props.list}>
          <img src={this.props.source} />
        </Content>
      </div>
    );
  }
}
