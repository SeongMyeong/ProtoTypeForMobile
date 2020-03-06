//초기 state
export const initialState = {
  username: 'seo',
};
//액션 타입
export const TEST1 = 'TEST1';
export const TEST2 = 'TEST2';
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
    default:
      // need this for default case
      return state;
  }
};

export default reducer;
