const loginInitialite = {
    isLogged: false
}
  
  const counterReducer = (state = loginInitialite, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { isLogged: true };
      case 'LOGOUT':
        return { isLogged: false };
      default:
        return state;
    }
  };
  
  export default counterReducer;