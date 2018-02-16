import React from 'react';
import style from '../styles.css';
import Content from './Card.jsx';

export default class Section<Props> extends React.Component {
  render() {
    return (
      <div className="section">
        <span className="sectiondetails">{this.props.sectionTitle}</span>
        {this.props.children}
      </div>
    );
  }
}
