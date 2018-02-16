import React from 'react';
import style from '../styles.css';
import Card from './Card.jsx';
import Section from './Section.jsx';
let data = require('../content.json');

export default class App extends React.Component {
  render() {
    let cards = data.reverse().map(function(c) {
      return (
        <Section>
          <Card
            id={c.id}
            date={c.when}
            time={c.time}
            day={c.day}
            source={c.source}
          />
        </Section>
      );
    });
    return (
      <div>
        <div className="header">
          <h1 className="headerTitle">The Food Blog</h1>
          <div className="menuButton">
            <img src="client/components/icons/menu.png" />
          </div>
        </div>
        <div className="main">{cards}</div>
      </div>
    );
  }
}
