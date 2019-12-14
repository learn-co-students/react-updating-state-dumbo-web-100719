// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {

    state ={
        hasBeenClicked: false,
        count: 0

    }

    handleClick =() =>{
        // const currentState = this.state.hasBeenClicked
        // this.setState({
        //     hasBeenClicked: !currentState
        // })
        // console.log(this.state.hasBeenClicked); // prints false
        this.setState( previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked,
                count: previousState.count +1

            }
          }, ()=> console.log(this.state))


    }

    render() {
        return (
            <div>
                <p> I have {this.state.hasBeenClicked ? null: 'not'} been clicked! </p>
                <button onClick ={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
