import React, { Component } from 'react';
import parse from 'html-react-parser';
import '../styles/CommentsComponent.css';
import { Stagger, Fade } from 'react-animation-components';


function RenderComments({comment}){
  
    if(comment != null )
            return (
                comment.map((comments) => {
                    return (
                            <Stagger in>
                                <div className='container' >
                                    <div className="row">
                                        <div className="col-12">
                                             <Fade in>
                                                <li key={comments.id} className="comment-list">
                                                        <p className="comment-design">  ➣ comment by {comments.by}</p>
                                                       <p className="main-comment">{ parse(`${comments.text}`) }</p>
                                                </li>
                                            </Fade>
                                        </div>
                                    </div>
                              </div>
                          </Stagger>
                    );
                })
            );

        else 
        return (<div></div>);

        
}

function RenderStories({story}){
    
    if(story!= null )
            return (
                story.map((stories) => {
                    return (
                        <div className='container' >
                            <div className="row">
                                <div className="col-xs-6">
                                      <a href={stories.url} target='_blank' className="storyIncomment"><p className="story-title">{stories.title}</p></a>
                                      <p className="story-details">{stories.score} points | by {stories.by} | {stories.descendants} comments</p>
                                </div>
                            </div>
                       </div>
                    );
                })
            );

        else 
        return (<div></div>);
}




class Comments extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
      return ( 
            <div className="container comments-container" >
            <div className="row" >
                 <div className="col-xs-6">

                        <RenderStories   story = {this.props.stories} 
                                       
                        />

                        <RenderComments comment={this.props.comments} />
                 
                 </div>
             </div>
         </div>
        );
    }
};

export default Comments;