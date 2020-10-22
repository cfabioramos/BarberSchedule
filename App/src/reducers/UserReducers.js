export const initialState = {
  avatar: "",
  favorites: [],
  appointments: [],
  isAdmin: false
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setUserContext":
      return { ...state, avatar: action.payload.avatar, isAdmin: action.payload.isAdmin };
      break;
    default:
      return state;
  }
};
