import React from 'react';
import Logo from '/icon.svg';
import styles from '../scss/main.module.scss';
import { Button } from '.';

const Header: React.FC = () => {
  const { header, container, logo, auth } = styles;

  return (
    <div className={header}>
      <div className={container}>
        <div className={logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={auth}>
          <Button className="users">Users</Button>
          <Button className="signup">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
