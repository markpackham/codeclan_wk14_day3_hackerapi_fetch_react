import React, { Component } from 'react';
import NewsList from '../components/NewsList';
import NewsSelect from '../components/NewsSelect';

class NewsContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            stories: [],
            selectedTitle: ""
        };
    }

    componentDidMount(){
        this.getStories()
    }

    getStories(){
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
       .then(res => res.json())
       .then(data => {
        const promises = data.slice(0,10).map((storyId) => {
          return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
             .then(res => res.json())
          )
        })
        Promise.resolve(promises)
         .then(stories => this.setState({stories: stories}))
       })
    }

    handleSelectedTitle(title){
        this.setSate({selectedTitle: title})
    }

    render(){
        return(
            <div className="news-container">
            <NewsList stories={this.state.stories}/>
            </div>
        )
    }
}

export default NewsContainer;