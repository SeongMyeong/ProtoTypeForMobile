//초기 state
export const initialState = {
  username: '',
  gb_cd: 0,
};
//액션 타입
export const TEST1 = 'TEST1';
export const TEST2 = 'TEST2';
export const LOGIN = 'LOGIN';
//액션
export const test1Action = {
  type: TEST1,
  data: {
    movieTitle: 'hello',
  },
};
//리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST1: {
      return { ...state };
    }
    case LOGIN: {
      return {
        ...state,
        username: action.data.username,
        gb_cd: action.data.gb_cd,
      };
    }
    default:
      // need this for default case
      return state;
  }
};

export default reducer;
