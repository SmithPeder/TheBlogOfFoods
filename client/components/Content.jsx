import React from 'react';
import style from '../styles.css';

export default class Content<Props> extends React.Component {
  render() {
    return (
      <div className="cardContent">
        {this.props.children}
        <div style={{ width: '40%' }}>
          <div className="list">
            <h3>Innhold</h3>
          </div>
          <div className="text">
            <h3>Beskrivelse</h3>
          </div>
        </div>
      </div>
    );
  }
}
