import React from 'react';
import styles from './getteammates.module.scss';
import { Button, TeamCard } from '..';
import { User } from '../../types/mainTypes';
import { AppDispatch } from '../../redux';
import { incrementPage } from '../../redux/slices/mainSlice';
import { StatusTypes } from '../../types/redux';
import Preloader from '../Preloader';

interface GetTeammatesProps {
  data: {
    status: StatusTypes;
    users: User[];
  };
  dispatch: AppDispatch;
}

const GetTeammates: React.FC<GetTeammatesProps> = ({ data, dispatch }) => {
  const ShowMoreHandler = () => {
    dispatch(incrementPage());
  };

  return (
    <div className={styles.getTeammates}>
      <h1>Working with GET request</h1>
      <div className={styles.grid}>
        {data.status === StatusTypes.PENDING ? (
          <>
            <div></div>
            <Preloader></Preloader>
            <div></div>
          </>
        ) : data.status === StatusTypes.FULFILLED ? (
          data.users.map((val: User, id: number) => <TeamCard key={id} {...val}></TeamCard>)
        ) : data.status === StatusTypes.REJECTED ? (
          <>
            <div></div>
            <h1>Sorry, we can't fetch users</h1>
            <div></div>
          </>
        ) : (
          ''
        )}
      </div>
      <div className={styles.button}>
        <Button onClick={ShowMoreHandler} className={styles.button}>
          Show more
        </Button>
      </div>
    </div>
  );
};

export default GetTeammates;
