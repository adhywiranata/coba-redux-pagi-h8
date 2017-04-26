const initialState = [
  { userId: 1, username: 'Luke Skycrawler', email: 'sky@gmail.com' },
  { userId: 2, username: 'Batman', email: 'imbatman@gmail.com' },
]

const userReducer = (state = initialState, action) => {
  return state;
};

export default userReducer;
