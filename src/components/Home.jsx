import React, {  useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { auth, db } from '../firebase'
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer'
import '../styles/Home.css'
import Modal from './UserModal';
import { addFriendRequested, addFriendSuccess, addFriendFailure } from '../store/friend'
const Home = () => {
  const dispatch = useDispatch();
  const [modalIsOpen,setIsOpen] = useState(false);
  const allUsers = useSelector(store => store.user.allUsers);
  const allFriends = useSelector(store=> store.friend.allFriends);
  const currentUid = useSelector(store=> store.user.uid);
  const currentEmail = useSelector(store=> store.user.email);
  const currentUsername = useSelector(store=> store.user.username);
  const openModal = () => {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  const setFriends = (user) =>{
    dispatch(addFriendRequested()); 
    db.collection('users').doc(currentUid).collection('friends').doc(user.uid).set({
      ...user,
    }).then(()=>{
      db.collection('users').doc(user.uid).collection('friends').doc(currentUid).set({
        uid:currentUid,
        email:currentEmail,
        username:currentUsername
      }).then(()=>{
        dispatch(addFriendSuccess());
        closeModal();
      })
      
    }).catch(()=>{
      dispatch(addFriendFailure());
    })
  }

  return ( 
    <div className="home__container">
      <div className="home__row home">
        <Modal modalIsOpen = {modalIsOpen} users = {allUsers} closeModal = {closeModal} setFriends = {setFriends}/>
        <Navbar />
        <Main allFriends = {allFriends} />
        <Footer openModal={openModal}/>
      </div>
    </div>
   );
}
 
export default Home;