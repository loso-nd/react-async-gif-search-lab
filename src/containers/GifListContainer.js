import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        giphy : []
    }

    //fetching data from Giphy API, store first 3 gifs from response to the state, pass that state down as props the the child <GifList />
    componentDidMount(){
        this.fetchGifs()

    }

    fetchGifs = (query) => {
        console.log(query)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                giphy: gifs.data.slice(0, 5)
            })
        })
    }


    render(){
        return (
            <div>
                <GifList gifs={this.state.giphy} />
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
           
        )
    }
}

export default GifListContainer;

/**
 * Updates:
 * ? componentDidMount
    *  !Rather than write the fetch function here, I can separat the code. Create a fetchGif method and call the function inside componentDidMount.
    *  !Pass the state as a prop to the child component
    *  !Pass the fetchGif method as a prop into the child component which gives us access to pass the user input value thru a function as props from the child back to the parent. This event target value will represent our ${query} in the fetch URL.
    * !We pass query as an arg into our method that is passed from the child to the parent and make use of this arg in our fetch url - ${query}
 * 
 */