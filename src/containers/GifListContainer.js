import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        giphy : []
    }

    //fetching data from Giphy API, store first 3 gifs from response to the state, pass that state down as props the the child <GifList />
    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                giphy: gifs.data
            })
        })
    }

    handleSubmit() {
        console.log("Anisha what's goodie in the hoodie?")
    }


    render(){
        return (
            <div>
                <h1>Anisha I like you.</h1>
                <GifList gifs={this.state.giphy} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
           
        )
    }
}

export default GifListContainer;