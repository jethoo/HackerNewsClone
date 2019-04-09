import React, { Component } from 'react';
import Header from './HeaderComponent';
import Story from './StoryComponent';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
           <div className="container mt-2">
                <Header />
                <Story />
           </div>
        );
    }
}

export default Main;