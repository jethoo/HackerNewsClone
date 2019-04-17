import React, { Component } from 'react';


var styles = {
    borderTop: '3px solid #FF6700',
    backgroundColor: '#F6F6EF',
    marginBottom: '5px',
    textAlign: 'center'
};

class Footer extends Component {

    constructor(props){
        super(props);
    }
   
   render(){
       return ( 
            <div className="container" style={styles}>
               © Jeewan Bhusal
            </div>
        );
    }
}

export default Footer;