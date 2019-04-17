import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';


var styles = {
    backgroundColor: '#FF6700',
    marginTop: '10px'
};

var style2={fontWeight:'bold', fontSize:'1.7rem', marginLeft: '13px'};  

class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return ( 
                    <Navbar dark expand="md" style={styles}>
                        <div className="container">
                            <NavbarBrand><Link to={'/home'} style={{ textDecoration: 'none', color:'#000000'}}><h5 style={style2}>Hacker News</h5></Link></NavbarBrand>
                        </div>
                    </Navbar>
              
        );
    }
};

export default Header;