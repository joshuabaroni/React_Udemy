/* Create 2 new components: userInput and userOutput
    * UserInput should hold an input element
    * UserOutput holds two paragraphs
 * Output multiple UserOutput components in the App component
 * Pass a username to UserOutput via props and display it
 * Add state to the App component (=> the username)
   and pass the username to the UserOutput component
 * Add a method to manipulate state (=> eventHandler)
 * Pass the eventHandler method reference to the UserInput
   Component and bind it to the input-change event
 * Ensure that the new input entered by the user overwrites
   the old username passed to UserOutput
 * Add 2-way-binding to your input (in UserInput) to also
   display the starting username
 * Add styling to the components/elements
    * Using inline styles
    * Using stylesheets
*/

import React, { Component } from 'react'

import './basics.css'

const UserInput = ( props ) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={ props.changed } value={ props.value }/>
            <button onClick={ props.update }>Submit</button>
        </div>
    )
}

const UserOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Last user added: "{ props.username }"</p>
        </div>
    )
}

const append = (arr, obj) => { arr.push(obj); return arr }

class App extends Component {
    state = {
        user: [{username: "admin"}]
    }

    display = ( event ) => {
        this.setState({ value: event.target.value })
    }

    update = () => {
        this.setState({
            user: append(this.state.user, { username: this.state.value })
        })
        console.log(this.state.user)
        return this.state.user;
    }

    render() {
        return (
            <div>
                <h1>React Basics</h1>
                <h2>Adding and Displaying Login Info</h2>
                <UserInput
                    changed={this.display}
                    update={this.update}
                />
                <UserOutput
                    username={
                        this.state.user[this.state.user.length - 1].username
                    }
                />
            </div>
        )
    }
}

export default App;
