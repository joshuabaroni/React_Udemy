import React, { Component } from 'react';
import Person from './Person/Person'
// import logo from './logo.svg';
import styled from 'styled-components'
import Radium, { StyleRoot } from 'radium'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: "Max", age: "28" },
      { id: 'shdb2', name: "Manu", age: "29" },
      { id: 'jkbfd', name: "Stephanie", age: "26" },
      { id: 'oask8', name: "Josh", age: "22"}
    ], // state.persons ~= this.globalArray
    showPersons: false
  } // JS object managed from inside the component; only available in class-based components  

  /* switchNameHandler() is DEPRECATED: kept for notes purposes */
  switchNameHandler = (newName) => {
    // handlers are not directly called, but handle changing conditions from the UI
    // console.log('clicked')
    // DON'T ACCESS DIRECTLY: this.state.persons[0].name = "Maximilian";
    this.setState({persons: [
        { name: newName, age: "28" },
        { name: "Manu", age: "29" },
        { name: "Stephanie", age: "27" }
      ]
    }) // instead, use setState({props}) to update the DOM
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex)

    const person = {
      ...this.state.persons[personIndex] // distribute all props
    }

    // const person = Object.assign({}, this.state.persons[personIndex]) // alt option

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //create a copy
    // const persons = this.state.persons.slice(); // using slice
    const persons = [...this.state.persons]; // using spread
    
    // change data
    persons.splice(personIndex, 1);

    // update state
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() { // JSX exp needs 1 root element
    const style = { // only use this when the style is specific to an object
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x',
      borderColor: 'solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } // pseudoselector
    }

    const StyleButton = styled.button`

    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1x;
    border-color: solid blue;
    padding: 8px;
    cursor: pointer;
    :hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }

    `

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

      persons = (
        <div>
          {(this.state.persons instanceof Array) ? this.state.persons.map((p, index) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={p.name} 
                  age={p.age}
                  key={p.id}
                  changed={(event) => this.nameChangedHandler(event, p.id)}
                />
              )
          }) : console.log(this.state.persons) }
        </div>
      );
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red');
      if (this.state.persons.length <= 1) {
        classes.push('bold'); // "red bold"
      }
    }

    return ( // 'this' returns the component object
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button className="button"
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons Basic Button
          </button>
          <button
            style={style}
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons Dynamic CSS Button
          </button>
          <StyleButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
            Toggle Persons Styled Button
          </StyleButton>
          { persons }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App); // Higher Order Component