import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand} from 'reactstrap';

var styles = {
    backgroundColor: '#FF6700'
};

class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return ( 
           
                <Navbar dark expand="md" style={styles}>
                    <NavbarBrand><h5>Hacker News</h5></NavbarBrand>
                </Navbar>
           
        );
    }
}

export default Header;