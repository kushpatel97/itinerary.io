import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import AllPosts from './mainPageComponents/allPosts';
import NewPost from './mainPageComponents/newPost';
import YourPosts from './mainPageComponents/yourPosts';
import Favorites from './mainPageComponents/favorites';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Post Component Title</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <NavLink to='/home/newPost' className="btn btn-md btn-info mr-2">New Itinerary</NavLink>
                        <button className="btn btn-md btn-outline-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Date: Newest First</a>
                            <a className="dropdown-item" href="#">Date: Oldest First</a>
                            <a className="dropdown-item" href="#">Votes: Lowest First</a>
                            <a className="dropdown-item" href="#">Votes: Highest First</a>
                            <a className="dropdown-item" href="#">Price: Lowest First</a>
                            <a className="dropdown-item" href="#">Price: Highest First</a>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Load componenets from side bar based on link clicke down here */}
                
                <Switch>
                    <Route exact path='/home/allPosts' component={AllPosts}/>
                    <Route exact path='/home/newPost' component={NewPost}/>
                    <Route exact path='/home/yourPosts' component={YourPosts}/>
                    <Route exact path='/home/favorites' component={Favorites}/>
                </Switch>
                </div>
            </main>
        );
    }
}

export default MainPage;