//presentational component
import React, { Component } from 'react';

class GifList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        console.log(this.props.gifs.url)

        return (
            <div>
                {this.props.gifs.map(gif => 
                <ul key={gif.id}>
                    <li key={gif.id}>
                        <img src={gif.images.original.url} alt={gif.title} /> 
                    </li>
                </ul>

            )}
            </div>
        )
    }

}

export default GifList
