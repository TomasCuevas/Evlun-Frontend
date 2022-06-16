import { types } from "../../types/types";

export const authReducer = (state = {}, action) => {

  switch (action.type) {
    case types.LOGIN: return action.payload;
    case types.LOGOUT: return {};
    default: return state;
  }
}