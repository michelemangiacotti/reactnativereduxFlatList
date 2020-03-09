import { PROFILE_TAB_CHANGE } from "../action/action";

const initialState = {
  datauser: null,
  loadProfile : false
  };

const profileTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TAB_CHANGE:
      // console.log("state datauser reducer:"+ state.datauser.first + " profile load: " + state.loadProfile);
     return {
        ...state,
        datauser: action.payload,
        loadProfile : true
      };
    default:
      return state;
  }
}

export default profileTabReducer;