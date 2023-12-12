import React from 'react';
import styles from '../scss/main.module.scss';

const GetTeammates: React.FC = () => {
  const { getTeammates, grid } = styles;

  return (
    <div className={getTeammates}>
      <h1>Working with GET request</h1>
      <div className={grid}></div>
    </div>
  );
};

export default GetTeammates;
