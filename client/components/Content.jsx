import React from 'react';
import style from '../styles.css';

export default class Content<Props> extends React.Component {
  render() {
    let fullList = this.props.list;
    let listElems = Object.keys(fullList).map(function(key) {
      return <li>{fullList[key]}</li>;
    });

    return (
      <div className="cardContent">
        {this.props.children}
        <div style={{ width: '40%' }}>
          <div className="list">
            <h3>Innhold</h3>
            {listElems}
          </div>
          <div className="text">
            <h3>Beskrivelse</h3>
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}
