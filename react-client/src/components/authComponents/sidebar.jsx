import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                <nav className="col-md-2 d-none d-md-block sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/home/allPosts'>All Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/home/yourPosts'>Your Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/home/favorites'>Favorites</NavLink>
                            </li>
                        </ul>
                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        Filters
                        </h6>

                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Form goes here</a>
                            </li>
                        </ul>

                    </div>
                    
                </nav>
        );
    }
}

const styles = {
    stickSidebar: {
        position: 'fixed'
    }
}

export default SideBar;