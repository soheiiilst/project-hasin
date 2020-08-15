import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectUser } from '../../redux/card/card.selectors';
import Avatar from '../../component/avatar/avatar.component';
import InfoBox from '../../component/infobox/infobox.component';
import './detail.styles.scss';

const DetailPage = ({ user, match }) => {
  const userId = match.params.userId;
  const { name, email, website } = user;
  return (
    <div className='detail-page'>
      <div className='side'>
        <Avatar imageSrc={`/images/user-${userId}.jpg`} />
        <InfoBox label='Name'>{name}</InfoBox>
        <InfoBox label='Email'>{email}</InfoBox>
        <InfoBox label='Website'>{website}</InfoBox>
      </div>
      <div className='main'>
        <h3 className='title'>Profile</h3>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iure
          alias voluptatem dolorem minus modi repudiandae, voluptas dicta esse
          quasi vel beatae reiciendis saepe cum. Dignissimos eos numquam
          laboriosam esse? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laborum quibusdam quos saepe, molestiae doloremque iste
          explicabo minus eos rem iure earum ut tempore, minima fugit mollitia
          rerum cum? Ipsam, veniam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum officia incidunt odit ratione maxime
          reprehenderit hic consequatur omnis provident possimus, ex, voluptate
          nesciunt dolorem veritatis expedita? Cumque alias cupiditate
          exercitationem!
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(ownProps.match.params.userId)(state)
});

export default connect(mapStateToProps)(withRouter(React.memo(DetailPage)));
