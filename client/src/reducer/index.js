

const userId = localStorage.getItem("userId");
const user = localStorage.getItem("username")
const token = localStorage.getItem("token");
const rol = localStorage.getItem("rol");

const initialState = user? {
  user: user,
  userId: userId,
  token: token,
  rol: rol,
  content: [],
  contentDetail: [],
  categories: [],
} : {
  user: null,
  userId: null,
  token: null,
  rol: null,
  contentDetail:[],
  content: [],
  categories: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.username,
        rol: action.payload.rol,
      };

    case "SIGN_UP":
      return {
        ...state,
      };
    
    case "LOGOUT": 
    return {
        ...state,
        token: null,
        user: null,
        rol: null
    }
    case "GET_CONTENT": 
    return {
        ...state,
        content: action.payload
    }

    case "CONTENT_DETAIL": 
    return {
        ...state,
        contentDetail: action.payload
    }
    case "SEARCH_CONTENT": 
     return {
        ...state,
        content: action.payload
    }
    case "UPDATE_CONTENT": 
    return {
      ...state,
    }
    case "MAKE_COMENT":
      return{
        ...state
      }
    
    default:
      return state;
}

};

export default rootReducer;
