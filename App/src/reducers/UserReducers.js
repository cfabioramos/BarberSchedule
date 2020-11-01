export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
  type: ''
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setUserContext":
      return { ...state, avatar: action.payload.avatar, type: action.payload.type };
      break;
    default:
      return state;
  }
};
