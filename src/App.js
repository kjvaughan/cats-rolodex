import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    //called when React first puts component on the page
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    //"this" is the class "App"
    //list of monsters is fetched by the App Component
    //callback on setState because setState is async, so callback needed for things to happen immediately
    const { monsters, searchField } = this.state; //equivalent to const monsters = this.state.monsters and const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SearchBox placeholder="search kitties" handleChange={e => this.setState({searchField: e.target.value})} />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
