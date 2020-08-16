import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsPending } from '../../redux/card/card.selectors';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import HomePage from './homepage.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsPending
});

const HomePageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(HomePage);

export default HomePageContainer;
