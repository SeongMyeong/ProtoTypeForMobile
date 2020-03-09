export const initialState = {
  isLoading: false,
  cardData: [],
  cardIndex: 0
};
//setState라고 생각하면됌
//대신 action 과 리듀서로 변경되었다고 생각
//ACTION
export const TEST1 = 'TEST1';
export const TEST2 = 'TEST2';
export const ADD_DUMMY = 'ADD_DUMMY';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const HELLO_SAGA = 'HELLO_SAGA';
export const HELLO_TWO = 'HELLO_TWO';

export const POST_CONTENTS_DETAIL = 'POST_CONTENTS_DETAIL';

export const test1Action = {
  type: TEST1,
  data: {
    movieTitle: 'hello',
  },
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    id: 1,
    movieTitle: 'hello',
    content: '',
  },
};

/* action이 들어왔을때 state를 어떻게 바꿀지를 정의함  */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cardData: [...action.data, ...state.cardData],
      };
    }
    case POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        cardData: [action.data, ...state.cardData],
      };
    }
    case HELLO_TWO: {
      return { ...state };
    }
    case POST_CONTENTS_DETAIL: {
      return {
        ...state,
        cardIndex: action.data
      }
    }
    default:
      // need this for default case
      return state;
  }
};

export default reducer;
