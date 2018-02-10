import React from 'react';
import style from '../styles.css';
import Container from './Container.jsx';
let data = require('../content.json');

export default class App extends React.Component {
  render() {
    let cards = data.map(function(cards) {
      return (
        <Container
          title={cards.title}
          date={cards.when}
          day={cards.day}
          source={cards.source}
        >
          {cards.content}
        </Container>
      );
    });

    return (
      <div>
        <div className="header">
          <h1 className="headerTitle">The Food Blog</h1>
          <div className="menuButton">
            <img src="client/components/menu.png" />
          </div>
        </div>
        <div className="main">{cards}</div>
      </div>
    );
  }
}
