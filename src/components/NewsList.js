import React, {Component} from 'react';
import NewsDetail from './NewsDetail';

class NewsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            modal: false,
            selectedNews: ''
        }
        this.modalAction = this.modalAction.bind(this)
        this.modal= this.modal.bind(this)
    }

    modalAction(event){
        console.log(this.state.modal);
        this.setState({modal: !this.state.modal})
        this.setState({selectedNews: event.target.value})
    }

    modal() {
        if (this.state.modal) {
        return (
            <div className="modal">
              <NewsDetail 
              stories={this.props.stories}
              storyId={this.state.selectedNews}
              />
              <button onClick={this.modalAction} className="close-button">Close</button>
            </div>

        )} else {
           return null
        }
    }
    
    render(){
       const newsStories = this.props.stories.map(story => {
            return (
                <div>
                    <div key={story.id}>
                        <ul className="news-card" >
                            <li onClick={this.modalAction} value={story.id}>
                                {story.title}
                            </li>
                            <li>
                                Author: {story.by}
                            </li>
                            <li>
                                Score: {story.score}
                            </li>
                        </ul>
                    </div>
                </div>
            )  
        })

        return(
            <div className="news-list">
                {newsStories}
                {this.modal()}
            </div>
        )
    }

    
    
}

export default NewsList;

