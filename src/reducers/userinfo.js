import * as actionTypes from '../constants/actions-types'

const initialState = {}
export default function userinfo(state = initialState, action) {
  switch (action.type) {
    // 登录
    case actionTypes.USERINFO_LOGIN:
      return { ...state, data: action.data }
    // 修改城市
    case actionTypes.UPDATE_CITYNSME:
      return { ...state, data: action.data }
    default:
      return state
  }
}