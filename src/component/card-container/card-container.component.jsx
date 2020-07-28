import React from 'react';
import { connect } from 'react-redux';
import { selectCardUsers } from '../../redux/card/card.selectors';
import Card from '../card/card.component';
import './card-container.styles.scss';

const CardContainer = ({ users }) => (
  <div className='card-container'>
    {users.map(user => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  users: selectCardUsers(state)
});

export default connect(mapStateToProps)(React.memo(CardContainer));
