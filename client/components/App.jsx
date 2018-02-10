import React from 'react';
import style from '../styles.css';
import Card from './Card.jsx';
let data = require('../content.json');

export default class App extends React.Component {
  render() {
    let cards = data.reverse().map(function(cards) {
      return (
        <Card
          title={cards.title}
          date={cards.when}
          time={cards.time}
          day={cards.day}
          source={cards.source}
          content={cards.content}
          list={cards.list}
        />
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
