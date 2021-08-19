export const initialState = {
  id: null,
  type: "",
  avatar: "",
  idCategory: null,
  favorites: [],
  appointments: [],
};

const uriAvatarPrefix =
  "https://barberschedulerbucket.s3.us-east-2.amazonaws.com/";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setUserContext":
      return {
        ...state,
        id: action.payload.id,
        avatar: uriAvatarPrefix + action.payload.avatar,
        type: action.payload.type,
        idCategory: action.payload.idCategory,
      };
    case "setIdCategory":
      return {
        ...state,
        idCategory: action.payload.idCategory,
      };
    default:
      return state;
  }
};
