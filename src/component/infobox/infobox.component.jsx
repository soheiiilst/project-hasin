import React from 'react';

import './infobox.styles.scss';

const InfoBox = ({ label, children }) => (
  <div className='infobox'>
    <h3 className='label'>{label}</h3>
    <h5 className='text'>{children}</h5>
  </div>
);

export default React.memo(InfoBox);
