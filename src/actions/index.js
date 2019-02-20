import * as actionsTypes from '../constants/actions-types'

export function login (data) {
  return {
    type: actionsTypes.USERINFO_LOGIN,
    data
  }
}

export function updataCityName(data){
  return {
    type: actionsTypes.UPDATE_CITYNSME,
    data
  }
}
// const setLogin = data => ({type: actionsTypes.USERINFO_LOGIN, data})
// // const setMoney = value => ({ type: SET_MONEY, data: value })
// const setCity = data => ({type: actionsTypes.UPDATE_CITYNSME, data})

// export const login = data => {
//   return dispatch => {
//     // 分发同步action
//     dispatch(setLogin(data))
//   }
// }

// export const updataCityName = data => {
//   return dispatch => {
//     dispatch(setCity(data))
//   }
// }


