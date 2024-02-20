import { SEARCH_PHOTOS_SUCCESS, ADD_SEARCH_TERM ,ADD_MORE_PHOTOS} from '../actions/types';

const initialState = {
  searchTerms: [],
  photos: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SEARCH_TERM:
      const lastTags = action.payload.split(' ');
      return {
        ...state,
        searchTerms: Array.from(new Set([...lastTags, ...state.searchTerms])).slice(0, 3),
      };
    case SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
      };
      case ADD_MORE_PHOTOS:
        return {
          ...state,
          photos: [...state.photos, ...action.payload],
        };
    default:
      return state;
  }
}
