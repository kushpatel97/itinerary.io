import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <nav className="col-md-3 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <h3>Navbar</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">All Posts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Your Posts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Favorited Posts</a>
                            </li>
                        </ul>

                    </div>
                    
                </nav>
            </div>
        );
    }
}

export default SideBar;