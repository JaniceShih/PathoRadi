import React from "react";
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FeedIndexContainer from './feed/feed_index_container';

const App = () => (
  <>
    <Switch>
        <Route exact path="/" component={FeedIndexContainer} />        
    </Switch>   
  </>
);

export default App;