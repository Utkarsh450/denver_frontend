import { loginuser, logoutuser } from "../reducers/userSlice";
import axios from "../../utils/axiosConfig";

export const asynccurrentuser = () => async (dispatch) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(loginuser(user));
            console.log("Session Restored!");
        } else {
            console.log("Login to access the resource!");
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncsigninuser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (data[0]) {
      console.log("User logged in!");
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(asynccurrentuser());

      return { success: true }; // ✅ return something to component
    } else {
      console.log("Wrong Credentials!");
      return { success: false, message: "Invalid email or password" }; // ❌ case
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong" }; // error fallback
  }
};


export const asyncsignupuser = (user) => async (dispatch) => {
  try {
    // Step 1: Check if user already exists by email
    const { data: existingUsers } = await axios.get(`/users?email=${user.email}`);

    if (existingUsers.length > 0) {
      // User already exists
      return {
        success: false,
        message: "User with this email already exists",
      };
    }

    // Step 2: Register the new user
    await axios.post("/users", user);
    console.log("User Registered!");

    return { success: true };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong during signup",
    };
  }
};



export const asyncupdateuser = (id, user) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`/users/${id}`, user);
        localStorage.setItem("user", JSON.stringify(data));

        // 🔥 Immediately reflect new user in Redux state
        dispatch(loginuser(data));

        console.log("User Updated!");
    } catch (error) {
        console.log(error);
    }
};


export const asynclogoutuser = () => async (dispatch) => {
    try {
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("User logged out!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncdeleteuser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/users/${id}`);
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("User Deleted!");
    } catch (error) {
        console.log(error);
    }
};