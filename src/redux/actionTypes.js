export function setUserAction(user) {
  return {
    type: 'SET_USER_STATE',
    payload: {
      user,
    },
  };
}
