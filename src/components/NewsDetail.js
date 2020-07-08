import React from 'react';
import Iframe from 'react-iframe';


const NewsDetail = (props) => {

    const story = props.stories.find((story) => story.id === props.storyId)
    const url = story.url
    
    const frame = (

        <Iframe url={url}
        className="i-frame"
        width="550px"
        height="550px"
        />
    )
    
    if(!props) return null
    return(
        <div>
            <h4>{story.title}</h4>
            {frame}
        </div>
    );

}

export default NewsDetail;