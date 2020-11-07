import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import { auth, db } from '../firebase'
const Login = () => {
  const [username, setUsername] = useState("");

  //Login code
  const loginHandler = () => {

  };


  //Signup code
  const registerHandler = () => {
    const email = username + "@gmail.com";
    const password = "noPassword";
    setUsername('')
    
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: username,
        });
        
        const uid = user.uid;
        console.log(user);
        //add new users to users table in cloud firestore 
        db.collection('users').doc(uid).set({
          uid,
          email: user.email
        })

      })
      .catch((error) => alert(error.code +' : ' + error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
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
      </div>
    </div>
  );
};

export default Login;
