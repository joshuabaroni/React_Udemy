import React from 'react'
// import Radium from 'radium'
import styled from 'styled-components'
import './Person.css';

const style = {
    '@media (min-width: 500px)': {
        width: '450px'
    }
};

const StyledDiv = styled.div`
        
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    ${style}

`
// component: function that returns HTML
const person = ( props ) => { // props: array object containing all passed properties
    
    return (
    // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={ props.click }> I'm { props.name } and I'm { props.age } years old!</p>
            <input type="text" onChange={ props.changed } value={ props.name }/>
        </StyledDiv>
    // </div>
    ) /* children refers to any elements placed between
    the opening and closing tags of our component */
}

export default /*Radium(*/person/*)*/;