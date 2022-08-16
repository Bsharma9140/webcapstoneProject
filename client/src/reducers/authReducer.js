import { SET_CURRENT_USER, USER_LOADING, GET_HOTELS } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  hotels: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
      case GET_HOTELS:
        return {
            ...state,
            hotels:action.payload

        };
    default:
      return state;
  }
}
