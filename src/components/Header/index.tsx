import React from 'react';
import Logo from '/icon.svg';
import styles from './header.module.scss';
import { Link } from 'react-scroll';
import { Button } from '..';

const Header: React.FC = () => {
  const { header, container, logo, auth } = styles;

  return (
    <div className={header}>
      <div className={container}>
        <div className={logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={auth}>
          <Link to="getTeammates" smooth={true} offset={-100} duration={500}>
            <Button className="users">Users</Button>
          </Link>
          <Link to="postTeammates" smooth={true} offset={50} duration={500}>
            <Button className="signup">Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
