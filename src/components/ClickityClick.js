// Code ClickityClick Component Here
import React,{Component} from 'react'
class ClickityClick extends Component{
    constructor(){
        super();
    
    this.state = {
        count: 0,
        //hasBeenClicked: false,
        //currentTheme: 'blue'
 
    }
    //console.log(hasBeenClicked)

    }
    handleClick = ()=>{
        //let newCount = this.state.count + 1
        this.setState(previousState =>{
            return {
                count: this.state.count + 1
            //count: previousState.count + 1
            //update status 
            //count: newCount
            //hasBeenClicked: true,
            //currentTheme:'blue'
            }
         }
        )
    }

    render() {
        return(
            <div> 
                {/* <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p> */}
                <h5>{this.state.count}</h5>
                <button onClick = {this.handleClick}>Click Me!</button>
            </div>
        );
    }
    
}

export default ClickityClick