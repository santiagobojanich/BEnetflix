
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SignIn, SignUp} from "../actions";
import { LogOut } from "./logOut";
import Swal from 'sweetalert2'
import styles from '../styles/Login.module.css'

export const Login = () => {
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
    
    const [input, setinput] = useState({
        username: "",
        password: "",
    });
    
  
    const handleInput = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

 const handleSignIn = (e) => {
   e.preventDefault()
   let inputSignIn = {
    username: input.username,
    password: input.password  
 }
  dispatch(SignIn(inputSignIn))
  setinput({
     username:'',
    password:''
     
  })
}
 
const handleSignUp = (e) => {
  e.preventDefault()
  Swal.fire({
  title: 'Do you want to SignUp?',
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes!'
  }).then((result) => {
    if(result.isConfirmed) {
      let inputSignUp = {
        username: input.username,
        password: input.password
      }
      dispatch(SignUp(inputSignUp))
      setinput({
        username:'',
        password: ''
      })
    } 
  })
   
}

  return (
    <div className={styles.background}>
      <div className={styles.title}>
       <h1> <span className={styles.span1}>BE</span><span className={styles.span2}>NETFLIX</span>  </h1> 
      </div>
      
      <div className={styles.login_box}>
      {user ? <div> 
        <NavLink to={'/home'}> 
        <button className={styles.buttonH}>Have Fun</button> 
        </NavLink> 
        <div className={styles.buttonOut}>
        <LogOut/>
        </div>
        </div> : null }
     { !user? 
      <form className={styles.form}>
        
        
        <div className={styles.inputs}>
        <label htmlFor="">Username:</label>
        <input type="text"  value={input.username}  name="username"  placeholder="username..."  onChange={handleInput}/>
        </div>
        
        <div className={styles.inputs}>
        <label htmlFor="">Password:</label>
        <input type="password" value={input.password} name="password" placeholder="password..." onChange={handleInput}/>
        </div>
       
       <button type="submit" className={styles.button} onClick={handleSignIn}> SignIn </button>
       <button type="submit" className={styles.button} onClick={handleSignUp}> SignUp </button>
      </form>
      : null
}   </div>
    </div>
  );
};
