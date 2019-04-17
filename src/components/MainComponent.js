import React, { Component } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Story from './StoryComponent';
import Footer from './FooterComponent';
import Comments from './CommentsComponent';
import { connect } from 'react-redux';
import { fetchIds, fetchComments } from '../redux/ActionCreators';




const mapStateToProps = state => {
    return {
        story: state.stories.stories,

        comment: state.comments.comments
    }
}
{/* mapstatetoprops is pointing to the store*/}

const mapDispatchToProps = (dispatch) => ({
   
    fetchIds: () => {dispatch(fetchIds())},

    fetchComments: () => {dispatch(fetchComments())}
    
    
});

class Main extends Component {
    constructor(props){
        super(props);
    }

   
    componentDidMount(){
        
        this.props.fetchIds();

        this.props.fetchComments();
    }

    render(){
       
        console.log(this.props.comment);
        console.log(this.props.story);

        const StoryPage = () => {
            return (
              <Story topStory = {this.props.story}
                     
              />
            );
          }

         const CommentPage = ({match}) => {
            return (
                <Comments comments ={this.props.comment.filter((com)=> com.parent === parseInt(match.params.commentId,10))}

                          stories = {this.props.story.filter((stori) => stori.id === parseInt(match.params.commentId,10))}

                        
                />
               
              );
        }
    
     
        return (
           <div className="container" style={{fontFamily:"monospace", fontSize: "1.3rem"}}>
              
                <Header />
                    
                            <Switch>
                                <Route exact path="/home" component={StoryPage} />
                                <Route path="/home/:commentId" component={CommentPage} /> 
                                <Redirect to="/home" />
                            </Switch>
                         
                <Footer />
           </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));