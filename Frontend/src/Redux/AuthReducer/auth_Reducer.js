import { getLocalData } from "../../utils/localStorage";
import * as types from "./action_Types";


const initialState = {
    isAuth: getLocalData("token") ? true : false,
    token: getLocalData("token") || "",
    profileData: [],
    isLoading: false,
    isError: false,
  };

const Auth_reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case types.REGISTER_REQUEST:
          return { ...state, isLoading: true };
    
        case types.REGISTER_SUCCESS:
          return { ...state, isLoading: false };
        case types.REGISTER_FAILURE:
          return { ...state, isLoading: false, isError: true };
    
        case types.LOGIN_REQUEST:
          return { ...state, isLoading: true };
        case types.LOGIN_SUCCESS:
          saveLocalData("token", payload);
          return { ...state, isLoading: false, isAuth: true, token: payload };
        case types.LOGIN_FAILURE:
          return {
            ...state,
            isLoading: false,
            isError: true,
            isAuth: false,
            token: "",
          };
    
        case types.PROFILE_SUCCESS:
          return { ...state, profileData: payload };
         default:
          return state;
        }
}

export default Auth_reducer;