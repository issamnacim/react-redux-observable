import { initialState } from "../containers/LanguageProvider/reducer";
import { fromJS } from 'immutable';
import * as actions from '../actions/index'
const initState = fromJS({
items: []
});

export const usersReducer = (state = initState, action) => {
  switch (action.type) {    
    case actions.STORE_USERS:
        return  {
          items: action.payload
        }
    case actions.ERROR_FETCH_API_USER:
        return Object.assign({}, state, {
          error_fetch_api_user: 'error'
        })
    default:
      return state;
  }
};