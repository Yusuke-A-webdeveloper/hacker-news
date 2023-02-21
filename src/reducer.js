const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'FETCH_NEWS':
      return {
        ...state,
        loading: false,
        news: action.payload.hits,
        numPages: action.payload.nbPages,
      };
    case 'CHAGE_QUERY':
      return { ...state, query: action.payload };
    case 'HANDLE_PAGE':
      if (action.payload === 'inc') {
        let nextNum = state.page + 1;
        if (nextNum > state.numPages - 1) {
          nextNum = 0;
        }
        return { ...state, page: nextNum };
      }
      if (action.payload === 'dec') {
        let prevNum = state.page - 1;
        if (prevNum < 0) {
          prevNum = state.numPages - 1;
        }
        return { ...state, page: prevNum };
      }
      break;
    case 'REMOVE_NEWS':
      const newNews = state.news.filter(
        (item) => item.objectID !== action.payload
      );
      return { ...state, news: newNews };

    default:
      throw new Error('there is no such action type');
  }
};

export default reducer;
