import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();
const url = 'https://hn.algolia.com/api/v1/search?';
const initialState = {
  loading: false,
  news: [],
  page: 0,
  numPages: 0,
  query: 'react',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNews = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const resp = await fetch(`${url}query=${state.query}&page=${state.page}`);
      const data = await resp.json();
      dispatch({ type: 'FETCH_NEWS', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (query) => {
    dispatch({ type: 'CHAGE_QUERY', payload: query });
  };

  const handlePage = (value) => {
    dispatch({ type: 'HANDLE_PAGE', payload: value });
  };

  const removeNews = (id) => {
    dispatch({ type: 'REMOVE_NEWS', payload: id });
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, handleSubmit, handlePage, removeNews }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
