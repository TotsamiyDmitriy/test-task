import React from 'react';
import styles from '../scss/teamcard.module.scss';
import { User } from '../types/mainTypes';

const TeamCard: React.FC<User> = React.memo(({ id, name, email, position, phone, photo }) => {
  return (
    <div className={styles.main} id={`card_${id}`}>
      <img className={styles.img} src={photo} alt="photo" />
      <p className={styles.name}>{name}</p>
      <div className={styles.otherInfo}>
        <p className={styles.position}>{position}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.phone}>{phone}</p>
      </div>
    </div>
  );
});

export default TeamCard;
