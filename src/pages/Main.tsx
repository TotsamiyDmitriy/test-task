import React from 'react';
import styles from '../scss/main.module.scss';
import { Banner, GetTeammates } from '../components';

const Main: React.FC = () => {
  const { container } = styles;

  return (
    <div className={container}>
      <Banner></Banner>
      <GetTeammates></GetTeammates>
    </div>
  );
};

export default Main;
