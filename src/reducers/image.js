export const imageReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return action.payload;
    case "REMOVE_IMAGE":
      return null;
    default:
      return state;
  }
};
