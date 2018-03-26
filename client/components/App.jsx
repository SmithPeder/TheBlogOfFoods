import style from '../styles.css';
import React from 'react';
import Card from './Card.jsx';
import Section from './Section.jsx';
import Menu from './Menu.jsx';
import sortBy from 'lodash/sortBy';
import groupBy from 'lodash/groupBy';
let data = require('../content.json');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { extended: false };
  }

  extend() {
    this.setState(state => ({ extended: !state.extended }));
  }

  render() {
    const sorted = sortBy(data, 'id').reverse();
    const groupings = groupBy(sorted, 'when');

    const sections = Object.keys(groupings).map(key => (
      <Section sectionTitle={key}>
        {groupings[key].map(c => {
          return (
            <Card
              id={c.id}
              title="Tittel"
              when={c.when}
              time={c.time}
              day={c.day}
              source={c.source}
            />
          );
        })}
      </Section>
    ));

    return (
      <div>
        <div className="header">
          <h1 className="headerTitle">The Food Blog</h1>
          <div className="menuButton" onClick={this.extend.bind(this)}>
            <img src="client/components/icons/menu.png" />
          </div>
        </div>
        <div className="main">{sections}</div>
        {this.state.extended && <Menu />}
      </div>
    );
  }
}
