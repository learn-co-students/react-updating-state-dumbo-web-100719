import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    this.state.hasBeenClicked === false ? this.setState({hasBeenClicked: true}) : this.setState({hasBeenClicked: false});
    
  }
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;


// Example of a toggle function:

// handleClick = () => {
//   this.setState(previousState => {
//     return {
//       toggled: !previousState.toggled
//     }
//   })
// }
