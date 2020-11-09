import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Navbar.css';
import {logout} from '../store/user';
import {clearFriends} from '../store/friend'
export default function Navbar() {
  const dispatch = useDispatch();
  const username = useSelector(store=>store.user.username);
  const onClickHandler = () =>{
    dispatch(logout());
    dispatch(clearFriends())
  }
  return (
    <div className="navbar">
      <div className="navbar__username"><h3>Hello {username}</h3></div>
      <div className="navbar__logoutBtn"><button onClick={onClickHandler}>Logout</button></div>
    </div>
  )
}
