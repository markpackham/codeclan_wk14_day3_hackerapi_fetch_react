import React from 'react';
import NewsDetail from './NewsDetail';

const NewsList = (props) => {
        const newsStories = props.stories.map(story => {
        return (
            <div key={story.id} className="news-card">
                <div>
                    Title: {story.title}
                </div>
                <div>
                    Author: {story.by}
                </div>
                <div>
                    Score: {story.score}
                </div>
                <a target="_blank" href={story.url}>link</a>
            </div>
        )
    })

    return(
        <div className="news-list">
            {newsStories}
        </div>
    )
    
}

export default NewsList;