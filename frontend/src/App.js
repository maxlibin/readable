import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LayoutContainer from "./containers/LayoutContainer";
import PostsContainer from "./containers/PostsContainer";
import PostContainer from "./containers/PostContainer";
import NewPostContainer from "./containers/NewPostContainer";
import EditPostContainer from "./containers/EditPostContainer";
import Notfound from "./components/Notfound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <LayoutContainer>
        <Switch>
          <Route exact path="/" component={PostsContainer} />
          <Route exact path="/:category" component={PostsContainer} />
          <Route exact path="/posts/new" component={NewPostContainer} />
          <Route exact path={"/:category/:id"} component={PostContainer} />
          <Route exact path={"/post/:id/edit"} component={EditPostContainer} />
          <Route component={Notfound} />
        </Switch>

      </LayoutContainer>
    );
  }
}

export default App;
