import React, { useContext } from 'react';
import styles from '../scss/main.module.scss';
import { Context } from '../main';
import { Button, TeamCard } from '.';
import { User } from '../types/mainTypes';

const GetTeammates: React.FC = () => {
  const { state, dispatch } = useContext(Context);

  const ShowMoreHandler = () => {
    dispatch ? dispatch({ type: 'INC_PAGE', payload: state?.data }) : console;
  };

  return (
    <div className={styles.getTeammates}>
      <h1>Working with GET request</h1>
      <div className={styles.grid}>
        {state?.data &&
          state?.data.users.map((val: User, id: number) => <TeamCard key={id} {...val}></TeamCard>)}
      </div>
      <div className={styles.button}>
        <Button onClick={ShowMoreHandler} className="width-120">
          Show more
        </Button>
      </div>
    </div>
  );
};

export default GetTeammates;
