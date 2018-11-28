import { globalType } from './constant';

const initialState = {
  startNum: [14,5,18,6,9]
};

const globalReducer = (state = initialState, action) => {
  const { type, plyload } = action;
  switch (type) {
    case globalType.SET_START_NUM:
      return Object.assign({}, state, {
        startNum: plyload
      });
    default: 
      return state;
  }
}

export default globalReducer;
