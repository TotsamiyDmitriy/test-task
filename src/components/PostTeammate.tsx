import React from 'react';
import styles from '../scss/main.module.scss';
import { Button } from '.';

const PostTeammate: React.FC = () => {
  return (
    <div className={styles.postTeammate}>
      <h1>Working with POST request</h1>
      <form className={styles.form} method="post">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
          minLength={2}
          maxLength={60}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          minLength={2}
          maxLength={100}
          pattern="?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$)"
          required
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          pattern=" ^[\+]{0,1}380([0-9]{9})$"
          required
        />
        <ul className={styles.checkList}>
          <p>Select your position</p>
          <li>
            <input type="radio" name="element" id="1" />
            Frontend developer
          </li>
          <li>
            <input type="radio" name="element" id="2" />
            Backend developer
          </li>
          <li>
            <input type="radio" name="element" id="3" />
            Designer
          </li>
          <li>
            <input type="radio" name="element" id="4" />
            QA
          </li>
        </ul>
        <input type="file" name="" id="" required />
      </form>
      <Button>Sign up</Button>
    </div>
  );
};

export default PostTeammate;
