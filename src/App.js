import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestCards } from './redux/card/card.actions';

import Navbar from './component/navbar/navbar.component';
import ErrorBoundary from './component/error-boundary/error-boundary.component';
import HomePageContainer from './pages/homepage/homepage.container';
import DetailPageContainer from './pages/detail/detail.container';
import AboutPage from './pages/about/about.component';
import './App.css';

const App = ({ requestCards }) => {
  useEffect(() => {
    requestCards();
  }, [requestCards]);
  return (
    <div>
      <Navbar />
      <Switch>
        <ErrorBoundary>
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path='/detail' render={() => <Redirect to='/' />} />
          <Route path='/detail/users/:userId' component={DetailPageContainer} />
          <Route path='/about' component={AboutPage} />
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(requestCards())
});

export default connect(null, mapDispatchToProps)(App);
