import React from 'react';
import style from '../styles.css';
import Container from './Container.jsx';
import data from './content.js';

export default class App extends React.Component {
  render() {
    let cards = data.cards.map(function(cards) {
      return (
        <Container
          title={cards.title}
          date={cards.date}
          source={cards.source}
        />
      );
    });

    return (
      <div>
        <div className="header">
          <h1 className="headerTitle">The Blog</h1>
          <div className="menuButton">
            <img src="client/components/menu.png" />
          </div>
        </div>
        <div className="main">{cards}</div>
      </div>
    );
  }
}
