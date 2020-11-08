import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/Navbar.css'
export default function Navbar() {
  const username = useSelector(store=>store.user.username);
  return (
    <div className="navbar">
      <div className="navbar__username"><h3>Hello {username}</h3></div>
      <div className="navbar__logoutBtn"><button>Logout</button></div>
    </div>
  )
}
