import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCard, deleteCard } from '../../redux/card/card.actions';
import Avatar from '../avatar/avatar.component';
import Button from '../button/button.component';
import './card.styles.scss';

const Card = ({ user, match, history, selectCard, deleteCard }) => {
  const { id, name } = user;
  return (
    <div className='card'>
      <div className='card-header'></div>
      <Avatar imageSrc={`images/user-${id}.jpg`} />
      <div className='text-box'>
        <h2 className='title'>{name}</h2>
      </div>
      <div className='btn-group'>
        <Button
          type='detail'
          onClick={() => {
            selectCard(user);
            history.push(`${match.url}detail/user-${id}`);
          }}
        >
          Detail
        </Button>
        <Button type='delete' onClick={() => deleteCard(id)}>
          <i className='fa fa-trash-o' aria-hidden='true'></i>
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  selectCard: card => dispatch(selectCard(card)),
  deleteCard: cardId => dispatch(deleteCard(cardId))
});

export default connect(null, mapDispatchToProps)(withRouter(React.memo(Card)));
