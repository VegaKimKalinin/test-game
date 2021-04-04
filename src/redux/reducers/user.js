const getInitialValue = () => {
  if (localStorage.getItem('userData')) {
    return JSON.parse(localStorage.getItem('userData'));
  }
  return {
    userName: '',
    force: 0,
    agility: 0,
    intelligence: 0,
    charisma: 0,
  };
};

const user = (state = getInitialValue(), action) => {
  switch (action.type) {
    case 'SET_USER_STATE':
      return { ...state, ...action.payload.user };
    default:
      return state;
  }
};

export default user;
