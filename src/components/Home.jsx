import React, {  useEffect } from 'react';
import { auth } from '../firebase'


const Home = () => {

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){ //logged in
        console.log(user)
      }
      else{
        //No user is signed in
      }
    })
    })

  return ( <h1>Home</h1> );
}
 
export default Home;