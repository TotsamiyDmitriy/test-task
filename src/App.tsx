/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from 'react';
import { Header } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './scss/main.module.scss';
import Main from './pages/Main';
import { type State, type Action, DataType } from './types/mainTypes';
import axios from 'axios';

const App: React.FC = () => {
  const { app } = styles;

  const initialState: State = {
    data: undefined,
  };

  const reducer: React.Reducer<State, Action<DataType>> = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case 'SET_USERS':
        return { ...state, data: payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const Context = React.createContext({});

  const clientCall = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
    headers: {
      'Content-type': 'application/json',
    },
  });

  React.useEffect(() => {
    (async () => {
      await clientCall
        .get<DataType>('users?page=1&count=50')
        .then((res) => {
          dispatch({ type: 'SET_USERS', payload: res.data });
        })
        .catch((err) => {
          console.error(err);
          return {};
        });
    })();
  }, [dispatch]);

  console.log(state);

  return (
    <div className={app}>
      <Context.Provider value={{ state, dispatch }}>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
