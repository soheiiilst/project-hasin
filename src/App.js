import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestCards } from './redux/card/card.actions';
import Navbar from './component/navbar/navbar.component';
import ErrorBoundary from './component/error-boundary/error-boundary.component';
import HomePage from './pages/homepage/homepage.component';
import DetailPage from './pages/detail/detail.component';
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
          <Route exact path='/' component={HomePage} />
          <Route exact path='/detail' render={() => <Redirect to='/' />} />
          <Route path='/detail/:userId' component={DetailPage} />
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
