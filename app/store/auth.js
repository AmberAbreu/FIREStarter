import axios from "axios";
import { AsyncStorage } from "react-native";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */ // me is user
export const me = () => async (dispatch) => {
  const token = await AsyncStorage.getItem(TOKEN);
  if (token) {
    // if user is valid, give them a token
    const res = await axios.get("/users/me", {
      headers: {
        authorization: token,
      },
    }); // setting the data to auth
    return dispatch(setAuth(res.data));
  }
};
// THUNK 2
export const authenticate =
  (username, email, password, method) => async (dispatch) => {
    try {
      //
      const res = await axios.post("/users/signup", {
        username,
        email,
        password,
      });
      // creates new user and gives them a token
      await AsyncStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

/* THUNK 3
we want to authenticate a user when they're logged in
we want acess to a username & password for user to login
ensure that the user's credentials are valid / truthy */
export const authenticateLogin = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", { email, password });
    await AsyncStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

// Thunk logout
export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN);
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth; // what is auth?
    default:
      return state;
  }
}
