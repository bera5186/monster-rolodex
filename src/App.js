import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.compenents'
import { Search } from './components/search/search.component';


class App extends React.Component {


  constructor() {
    super();

    this.state = {
      monsters: [],
      query: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {

    const { monsters, query } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(query.toLowerCase())
    )

    return (

      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search 
          placeholder="Search Monster"
          handleChange={e => this.setState({ query: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
