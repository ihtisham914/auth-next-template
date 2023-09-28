import axios from "axios";
import { logIn, setLoading, setError } from "../features/authSlice";
const BASE_API = "http://localhost:7000/api/v1/auth";
const API = axios.create({ baseURL: BASE_API });

export const SignIn = async (UserData, dispatch) => {
  const { email, password } = UserData;
  dispatch(setLoading());

  try {
    const response = await API.post("login", { email, password });
    console.log(response.data);
    dispatch(logIn(response.data));
  } catch (error) {
    if (error.response) {
      if (error.response.status == 401) {
        dispatch(setError("Wrong Credentials"));
      } else {
        dispatch(setError("Something went wrong"));
      }
    }
  }
};
