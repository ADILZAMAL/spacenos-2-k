import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { auth, db } from '../firebase'
import {loginRequested, loginSuccessfull, loginFailed} from '../store/user';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
  const isauthenticated = useSelector(store => store.user.isAuthenticated);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(store=> store.user.isLoading)

  //Login code
  const loginHandler = () => {
    setUsername('')
    dispatch(loginRequested())
    const email = username + '@gmail.com';
    const password = 'noPassword';

    auth
    .signInWithEmailAndPassword(email, password)
    .then(({user})=>{
      dispatch(loginSuccessfull({
       uid: user.uid,
       username: user.displayName,
       email: user.email 
      }))
    })
    .catch((error)=>{
      dispatch(loginFailed())
      alert(error.code + ' : ' + error.message)
    })

  };


  //Signup code
  const registerHandler = () => {
    const email = username + "@gmail.com";
    const password = "noPassword";
    const name = username;
    setUsername('');    
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: username,
        });
        
        const uid = user.uid;
        //add new users to users table in cloud firestore 
        db.collection('users').doc(uid).set({
          uid,
          email: user.email,
          username: name
        })
        dispatch(loginSuccessfull({
          uid,
          username,
          email
         }))

      })
      .catch((error) => alert(error.code +' : ' + error.message));
  };

  if(isauthenticated)
  return <Redirect to={"/"} />

  return (
    <div className="login">
    {isLoading&& <p>Loading...</p>}
    {!isLoading&&     <div className="login__container">
        <input
          className="login__input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username..."
        />
        <button onClick={loginHandler} className="login__login">
          Login
        </button>
        <button onClick={registerHandler} className="login__register">
          Register
        </button>
      </div>}
  
    </div>
  );
};

export default Login;
