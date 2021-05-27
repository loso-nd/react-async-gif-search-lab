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
                <ul>
                    <li>
                        <img src={gif.images.original.url} /> 
                    </li>
                </ul>

            )}
            </div>
        )
    }

}

export default GifList
