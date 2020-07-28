import React from 'react';

import './avatar.styles.scss';

const Avatar = ({ imageSrc }) => (
  <div className='avatar-box'>
    <img src={imageSrc} className='avatar' alt='Card Avatar' />
  </div>
);

export default React.memo(Avatar);
