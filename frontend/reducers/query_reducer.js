import { UPDATE_QUERY } from "../actions/search";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_QUERY:
      debugger;
      return action.query;
    default:
      return state;
  }
};
