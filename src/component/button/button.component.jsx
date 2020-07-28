import React from 'react';

import './button.styles.scss';

const Button = ({ type, onClick, children }) => (
  <button className={`btn ${type}`} onClick={onClick}>
    {children}
  </button>
);

export default React.memo(Button);
