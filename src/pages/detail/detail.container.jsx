import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCardsLoaded } from '../../redux/card/card.selectors';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import DetailPage from './detail.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCardsLoaded(state)
})

const DetailPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(DetailPage);

export default DetailPageContainer;