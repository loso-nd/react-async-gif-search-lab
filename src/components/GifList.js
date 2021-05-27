//presentational component
import React from 'react';

function  GifList (props){
    console.log(props)
    
    return (
        <div>
            Hello from the GifList component
            
            {props.gifs.map(gif =>  gif.url
                )}
        </div>
    )
}

export default GifList
