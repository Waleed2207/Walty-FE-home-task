import axios from 'axios';
import { SEARCH_PHOTOS_SUCCESS,ADD_SEARCH_TERM ,ADD_MORE_PHOTOS} from './types';

const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const PIXABAY_API_URL = process.env.REACT_APP_PIXABAY_API_URL;


export const addSearchTerm = (term) => ({
  type: ADD_SEARCH_TERM,
  payload: term
});

export const addTag = (tag) => ({
  type: 'ADD_TAG',
  payload: tag,
});

export const setPhotos = (photos) => ({
  type: 'SET_PHOTOS',
  payload: photos,
});

export const addMorePhotos = (photos) => {
  return {
    type: ADD_MORE_PHOTOS,
    payload: photos,
  };
};

export const searchPhotos = (tag) => async (dispatch) => {
    try {
      const response = await axios.get(`${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(tag)}&image_type=photo`);
      dispatch({
        type: SEARCH_PHOTOS_SUCCESS,
        payload: response.data.hits, 
      });
      dispatch({
        type: ADD_SEARCH_TERM,
        payload: tag,
      });
    } catch (error) {
      console.error('Error fetching photos:', error);
      
    }
  };