import React from 'react';
import styles from './teamcard.module.scss';
import { User } from '../../types/mainTypes';

import 'react-tooltip/dist/react-tooltip.css';

import { Tooltip } from 'react-tooltip';

const TeamCard: React.FC<User> = React.memo(({ id, name, email, position, phone, photo }) => {
  return (
    <div className={styles.main} id={`card_${id}`}>
      <img className={styles.img} src={photo} alt="photo" />
      <p className={`${styles.name} ${styles.name}_${id}`}>{name}</p>
      <div className={styles.otherInfo}>
        <p className={`${styles.name} ${styles.position}_${id}`}>{position}</p>

        <p className={`${styles.name} ${styles.email}_${id}`}>{email}</p>

        <p className={`${styles.name} ${styles.phone}_${id}`}>{phone}</p>
      </div>
      <Tooltip anchorSelect={`.${styles.name}_${id}`} place="top-end">
        {name}
      </Tooltip>
      <Tooltip anchorSelect={`.${styles.email}_${id}`} place="top-end">
        {email}
      </Tooltip>
      <Tooltip anchorSelect={`.${styles.phone}_${id}`} place="top-end">
        {phone}
      </Tooltip>
      <Tooltip anchorSelect={`.${styles.position}_${id}`} place="top-end">
        {position}
      </Tooltip>
    </div>
  );
});

export default TeamCard;
