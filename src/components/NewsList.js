import React, {Component} from 'react';
import NewsDetail from './NewsDetail';

class NewsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            modal: false
        }
        this.modalAction = this.modalAction.bind(this)
        this.modal= this.modal.bind(this)
    }

    modalAction(event){
        console.log(this.state.modal);
        this.setState({modal: !this.state.modal})
    }
        
    // modalClass = () => {
    //     if (this.state.modal===false) return "show-modal"
    //     if (this.state.modal===true) return "hide-modal"
    // }


    modal() {
        if (this.state.modal) {
        return (
            <div className={this.modalClass + " " + "modal"}>
                <h3>Heading</h3>
                <h4>Score: </h4>
                <p>Type: </p>
                <a href="#"></a>
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
                            <li onClick={this.modalAction}>
                                Title: {story.title}
                            </li>
                            <li>
                                Author: {story.by}
                            </li>
                            <li>
                                Score: {story.score}
                            </li>
                            <a target="_blank" href={story.url}>link</a>
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

