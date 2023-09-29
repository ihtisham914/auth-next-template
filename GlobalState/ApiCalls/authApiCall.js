import axios from "axios";
import { logIn, setLoading, setError, signUp } from "../features/authSlice";
import { useRouter } from "next/navigation";
const BASE_API = "http://localhost:7000/api/v1/auth";
const API = axios.create({ baseURL: BASE_API });

export const SignIn = async (UserData, dispatch, router) => {
  const { email, password } = UserData;
  dispatch(setLoading());
  try {
    const response = await API.post("login", { email, password });
    dispatch(logIn(response.data));
    router.push("/");
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

export const SignUp = async (UserData, dispatch, router) => {
  const { name, email, password } = UserData;
  dispatch(setLoading());

  try {
    const response = await API.post("signup", { name, email, password });
    if (response.status == 200) dispatch(signUp());
    router.push("/auth/login");
  } catch (error) {
    if (error.response) {
      if (error.response.status == 409) {
        dispatch(setError("User already exists"));
      } else {
        dispatch(setError("Something went wrong"));
      }
    }
  }
};
