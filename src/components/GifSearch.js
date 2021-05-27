import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        search: ''
    }

    handleChange(event){
        console.log("I take care of the search bar")
        console.log(event.target.value)
        this.setState({
            search: event.target.value
        }, () => console.log("After setState:", this.state))
        console.log("Before setState:", this.state)
    }


    render(){
        return (
            <form>
                <label>
                    Enter a Search Term
                    <input type="text" name="search" value={this.state.value} 
                        onChange={event => this.handleChange(event)}/> 
                </label>
                <input type="submit" value="submt" />
            </form>
        )
    }
}

export default GifSearch


/**
 * Conntrolled Forms:  a form that derives its input values from state
 * 
 * Steps:
 * ? Set the state 
 * ? Create the form
    *  !type = text
    *  !name = matches the keyName in our state
    *  !value = {this.state.keyName}
 * 
 * ? Change the state 
    *  * Goal: We want to initiate a state change via setState and fire it every time the form changes
    *  !Add event Listener onChange to the form which will fire every time the value of an input changes
    *  !create a handleChange method that triggers when a change has be made in the search input
    *  !Via setState change the state of the state when handleChange method is triggerd by user input
    *  * The event contains data about the target, which is whatever DOM element the event was    triggered on. That target, being an input, has a value attribute. This attribute is equal to whatever is currently entered into that particular input!
 */