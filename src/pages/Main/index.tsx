import React from 'react';
import styles from './main.module.scss';
import { Banner, GetTeammates, PostTeammate } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchPositions, fetchUsersData } from '../../redux/slices/mainSlice';

const Main: React.FC = () => {
  const { container } = styles;

  const dispatch = useAppDispatch();

  const { page, data, token, positions, tokenStatus, positionsStatus } = useAppSelector(
    ({ mainSlice }) => ({
      page: mainSlice.page,
      data: mainSlice.data,
      token: mainSlice.token,
      tokenStatus: mainSlice.tokenStatus,
      positions: mainSlice.positions,
      positionsStatus: mainSlice.positionsStatus,
    }),
  );

  React.useEffect(() => {
    dispatch(fetchUsersData(page));
  }, [dispatch, page]);

  React.useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  return (
    <div className={container}>
      <Banner></Banner>
      <GetTeammates dispatch={dispatch} data={data}></GetTeammates>
      <PostTeammate
        dispatch={dispatch}
        token={token}
        page={page}
        positions={positions}
        tokenStatus={tokenStatus}
        positionsStatus={positionsStatus}></PostTeammate>
    </div>
  );
};

export default Main;
