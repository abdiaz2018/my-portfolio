import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <Link class="link" to="/">Home</Link>
                <Link class="link" to="/projects">Projects</Link>
                <Link class="link" to="/contact">Contact</Link>
            </div>
        )
    }
} 

export default Navbar;