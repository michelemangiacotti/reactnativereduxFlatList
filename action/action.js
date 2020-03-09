export const PROFILE_TAB_CHANGE = 'PROFILE_TAB_CHANGE'

export const openProfileTab = (datauser) => {
  return {
    type: PROFILE_TAB_CHANGE,
    payload: datauser ,
  }
}
