const defaultState = {
    username: '',
    password: '',
    confirmpwd: '',
    name: '',
    dob: null,
    country: '',
    citizenship: true
  }
  
  const userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "USERNAME": {
        return { ...state, username: action.value }
      }
      case "PASSWORD": {
        return { ...state, password: action.value }
      }
      case "CONFIRMPWD": {
        return { ...state, confirmpwd: action.value }
      }
      case "NAME": {
        return { ...state, name: action.value }
      }
      case "COUNTRY": {
        return { ...state, country: action.value }
      }
      case "DOB": {
        return { ...state, dob: action.value }
      }
      case "CITIZEN": {
        return { ...state, citizenship: action.value }
      }
      default: {
        return state;
      }
    }
  }

  export default userReducer;