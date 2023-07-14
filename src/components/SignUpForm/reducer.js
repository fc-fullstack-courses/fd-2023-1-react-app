export default function reducer(state, action) {
  switch (action.type) {
    case 'login': {
      const newState = {
        ...state,
        login: action.payload,
      };

      return newState;
    }
    case 'password': {
      const newState = {
        ...state,
        password: action.payload,
      };

      return newState;
    }
    case 'email': {
      const newState = {
        ...state,
        email: action.payload,
      };

      return newState;
    }
    case 'phone': {
      const newState = {
        ...state,
        phone: action.payload,
      };

      return newState;
    }
    case 'name': {
      const newState = {
        ...state,
        name: action.payload,
      };

      return newState;
    }
    default: {
      return state;
    }
  }
}