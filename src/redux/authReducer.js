const loginInitialite = {
  isLogged: false,
  user: null,
  token: null
}

export const counterReducer = (state = loginInitialite, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLogged: true };
    case 'LOGOUT':
      return { isLogged: false };
    default:
      return state;
  }
};

  // export default counterReducer;