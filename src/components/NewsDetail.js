import React from 'react';
import Iframe from 'react-iframe';


const NewsDetail = (props) => {

    const story = props.stories.find((story) => story.id === props.storyId)
    const url = story.url

    // console.log(story);
    

    const frame = (
        // <iframe src={url} frameborder="0"></iframe>
        <Iframe url={url}
        width="550px"
        height="550px"
        />
        // null
    )
    
    if(!props) return null
    return(
        <div>
            <h4>{story.title}</h4>
            {frame}
            {/* <Iframe src={props.stories.url} title="title"/>
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA" title="title" /> */}
        </div>
    );

}

export default NewsDetail;