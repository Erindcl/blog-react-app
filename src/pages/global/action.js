import { globalType } from './constant';

export const startNum = (data) => ({
  type: globalType.SET_START_NUM,
  payload: data
})

// export const setStartNum = (params) => async (dispatch) => {
//   dispatch(startNum(params));
// }