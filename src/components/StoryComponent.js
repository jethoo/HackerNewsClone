import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/StoryComponent.css';




class Story extends Component {

    constructor(props){
        super(props);
    }

   
    render(){

      function RenderStories(stories){
            if(stories!= null)
                return (
                    stories.map((story) => {
                        return (
                            <div className='container' >
                                <div className="row">
                                    <div className="col-12">
                                        <li key={story.id} >
                                            <a href={story.url} target='_blank' className="home-page" ><p>{story.title}</p></a>
                                            <p>{story.score} points by {story.by} |  <Link to={`/home/${story.id}`} style={{textDecoration:'none'}}>{story.descendants} comments </Link> </p>
                                        </li>
                                     </div>
                                </div>
                            </div>
                         );
                    })
                );
              else 
                return (<div></div>);
        }


       return ( 
            <div className="container" className="container-background">
               <div className="row" >
                    <div className="col-12 ">
                        <ol >
                           
                           {RenderStories(this.props.topStory)}

                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Story;