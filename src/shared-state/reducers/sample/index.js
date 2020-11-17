import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {RNToasty} from 'react-native-toasty';

// ========= Types & Actions ========= //
const {Types, Creators} = createActions({
  // Get Sample News Action
  getSampleNewsRequest: ['param'],
  getSampleNewsSuccess: ['payload'],
  getSampleNewsFailure: ['error'],

  // Bookmark
  addBookmark: ['data'],
  deleteBookmark: ['data'],
});
export const SampleTypes = Types;
export default Creators;

// ========= Initial State ========= //
const INITIAL_STATE = Immutable({
  sampleNews: [],
  loading: true,
  error: null,

  bookmark: [],
});

// ========= Selectors ========= //
export const SampleSelectors = {
  getSampleNews: (state) => state.sample.sampleNews,
  getLoading: (state) => state.sample.loading,

  getBookmark: (state) => state.sample.bookmark,
};

// ========= Reducers ========= //
const reducerGetSampleNewsRequest = (state, {param}) => {
  return {
    ...state,
    loading: true,
    sampleNews: [],
  };
};
const reducerGetSampleNewsSuccess = (state, {payload}) => {
  return {
    ...state,
    loading: false,
    sampleNews: payload,
  };
};
const reducerGetSampleNewsFailure = (state, {error}) => {
  return {...state, loading: false, error};
};

const reducerAddBookmark = (state, {data}) => {
  if (state.bookmark.findIndex((row) => row.url === data.url) === -1) {
    RNToasty.Success({
      title: 'News added to bookmark',
    });
    const filteredNews = state.sampleNews.filter((row) => row.url !== data.url);
    return {
      ...state,
      bookmark: [...state.bookmark, data],
      sampleNews: filteredNews,
    };
  }
  RNToasty.Error({
    title: 'News already in bookmark',
  });
  return {...state};
};

const reducerDeleteBookmark = (state, {data}) => {
  const filteredBookmark = state.bookmark.filter((row) => row.url !== data.url);
  RNToasty.Success({
    title: 'News deleted from bookmark',
  });
  return {...state, bookmark: filteredBookmark};
};
// ========= Reducers ========= //

// ========= Hook Reducer to Types ========= //
export const reducer = createReducer(INITIAL_STATE, {
  // Get Sample News Reducer
  [Types.GET_SAMPLE_NEWS_REQUEST]: reducerGetSampleNewsRequest,
  [Types.GET_SAMPLE_NEWS_SUCCESS]: reducerGetSampleNewsSuccess,
  [Types.GET_SAMPLE_NEWS_FAILURE]: reducerGetSampleNewsFailure,

  [Types.ADD_BOOKMARK]: reducerAddBookmark,
  [Types.DELETE_BOOKMARK]: reducerDeleteBookmark,
});
