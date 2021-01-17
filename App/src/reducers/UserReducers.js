export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
  type: ''
};

const uriAvatarPrefix = 'https://barberschedulerbucket.s3.us-east-2.amazonaws.com/'

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setUserContext":
      return { ...state, 
        avatar: uriAvatarPrefix + action.payload.avatar, 
        type: action.payload.type 
      };
    default:
      return state;
  }
};
