// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super();
     
        // Define the initial state:
        this.state = {
          hasBeenClicked: false
        };
      }
     
      handleClick = () => {
        // let boo = this.state.hasBeenClicked
        // Update our state here...
        this.setState(prevState=>({
            
            hasBeenClicked: !prevState.hasBeenClicked
          }))
      };
     
      render() {
        return (
          <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
        );
      }
}
