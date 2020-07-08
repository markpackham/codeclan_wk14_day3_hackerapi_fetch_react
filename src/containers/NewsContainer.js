import React, { Component } from 'react';
import NewsList from '../components/NewsList';

class NewsContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            stories: [],
        };
    }

    componentDidMount(){
        this.getStories()
    }

    getStories(){
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
       .then(res => res.json())
       .then(data => {
        const promises = data.slice(0,20).map((storyId) => {
          return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
             .then(res => res.json())
          )
        })
        Promise.all(promises)
         .then(data => this.setState({stories: data}))
       })
    }

    render(){
        return(
            <div className="news-container">
                <h1>Top Stories</h1>
            <NewsList stories={this.state.stories}/>
            </div>
        )
    }
}

export default NewsContainer;