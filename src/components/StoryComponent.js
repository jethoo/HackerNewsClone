import React, { Component } from 'react';

var styles = {
    backgroundColor: '#F6F6EF'
};

class Story extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <div style={styles}>
                    <h1>Jeewan</h1>
                    <h1>Bhusal</h1>
                    <h1>Software Engineer</h1>
                    <h1>Computer Programmer</h1>
                    <h1></h1>
            </div>
        );
    }
}

export default Story;