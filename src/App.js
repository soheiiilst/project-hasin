import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { requestCards } from './redux/card/card.actions';
import { selectIsPending, selectIsCardsLoaded } from './redux/card/card.selectors';

import WithSpinner from './component/with-spinner/with-spinner.component';

import Navbar from './component/navbar/navbar.component';
import ErrorBoundary from './component/error-boundary/error-boundary.component';
import HomePage from './pages/homepage/homepage.component';
import DetailPage from './pages/detail/detail.component';
import AboutPage from './pages/about/about.component';
import './App.css';

const HomePageWithSpinner = WithSpinner(HomePage);
const DetailPageWithSpinner = WithSpinner(DetailPage);

const App = ({ requestCards, isPending, isCardsLoaded }) => {
  useEffect(() => {
    requestCards();
  }, [requestCards]);
  return (
    <div>
      <Navbar />
      <Switch>
        <ErrorBoundary>
          <Route
            exact
            path='/'
            render={(props) => <HomePageWithSpinner isLoading={isPending} {...props} />}
          />
          <Route exact path='/detail' render={() => <Redirect to='/' />} />
          <Route
            path='/detail/users/:userId'
            render={(props) => <DetailPageWithSpinner isLoading={!isCardsLoaded} {...props} />}
          />
          <Route path='/about' component={AboutPage} />
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isPending: selectIsPending,
  isCardsLoaded: selectIsCardsLoaded
})

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(requestCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
