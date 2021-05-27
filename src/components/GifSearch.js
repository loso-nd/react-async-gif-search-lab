//presentational
import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        // console.log("I take care of the search bar")
        // console.log("Event Target Value: ", event.target.value)
        this.setState({
           search: event.target.value //captures the value of the user input
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.search) //most updated search value

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter a Search Term
                    <input type="text" name="search" value={this.state.search} 
                        onChange={this.handleChange}
                        /> 
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
    * * The event contains data about the target, which is whatever DOM element the event was    triggered on. That target, being an input, has a value attribute. This attribute is equal to whatever is currently entered into that particular input!
*
* ? Submitting a Controlled Form
* Goal: Now that we're controlling the form with state, we want to set up a way to submit our form.
*   ! Add synthetic event onSubmit to the form
*   ! to prevent the auto refresh we add e.preventDefault()
*   ! We want to make use of the fetchGifs method, and pass in the state of our search. The state is updated per user input, initiating the setState update. This update is pass into this method to bumped back up to the parent. Once the function is invocked by the handleSubmit, it is re-rendered in componentDidMount calling the fetchGifs method to execute the ${query} or the search we expect
*
*
*

*/