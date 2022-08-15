import axios from "axios";
import jwt from "jwt-decode";
import Swal from "sweetalert2";

export function SignIn(inputUser) {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://localhost:3001/api/auth/signIn",
        inputUser
      );
      //  console.log(inputUser)
      dispatch({ type: "SIGN_IN", payload: response.data });
      Swal.fire({ title: "Welcome", icon: "success" });
      const decoded = jwt(response.data.token);
      localStorage.userId = decoded.id;
      localStorage.username = decoded.username;
      localStorage.token = response.data.token;
      localStorage.rol = decoded.rol;
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Wrong username or password",
        icon: "error",
      });
    }
  };
}

export function SignUp(inputUser) {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://localhost:3001/api/auth/signUp",
        inputUser
      );
      dispatch({ type: "SIGN_UP", payload: response.data });
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Username already in use",
        icon: "error",
      });
    }
  };
}

export function Logout() {
  localStorage.setItem("username", "");
  localStorage.setItem("userId", "");
  localStorage.setItem("token", "");
  localStorage.setItem("rol", "");

  return { type: "LOGOUT" };
}

export function GetContent(accesstoken) {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/api/content", {
        headers: accesstoken,
      });
      console.log(response);
      dispatch({ type: "GET_CONTENT", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function GetContentDetail(id, accesstoken) {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `http://localhost:3001/api/content/${id.id}`,
        { headers: accesstoken }
      );
      dispatch({ type: "CONTENT_DETAIL", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function SearchContent(input, accesstoken) {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `http://localhost:3001/api/content?name=${input}`,
        { headers: accesstoken }
      );
      dispatch({ type: "SEARCH_CONTENT", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/api/categories");
    return dispatch({ type: "SET_CATEGORIES", payload: response.data });
  };
}

export function createContent(input, accesstoken) {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://localhost:3001/api/content",
        input,
        { headers: accesstoken }
      );
      return dispatch({ type: "CREATE_CONTENT" });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteContent(id,accesstoken) {
  return async function (dispatch){
    try{
      let response = await axios.delete(`http://localhost:3001/api/content/${id.id}`, {headers: accesstoken})
      return dispatch({type: "DELETE_CONTENT"})
    } catch(e){
      console.log(e)
    }
  }
}

export function updateContent(id,input,accesstoken) {
 return async function (dispatch) {
  try{
    let response = await axios.put(`http://localhost:3001/api/content/${id.id}`, input, {headers: accesstoken})
    return dispatch({type:"UPDATE_CONTENT"})
  
  }catch(e){
   console.log(e)
  }
 }
}

export function makeComent(bodyComent,accesstoken) {
  return async function (dispatch) {
    try{
       console.log(bodyComent, accesstoken)
       let response = await axios.post("http://localhost:3001/api/content/coment", bodyComent, {headres:accesstoken} )
       return dispatch({type: "MAKE_COMENT"})
    }catch(e){
      console.log(e)
    }
  }
}