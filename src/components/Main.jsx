import React from 'react'
import '../styles/Main.css'
import { useSelector } from 'react-redux'
export default function Main({allFriends}) {
  // const friends = useSelector(store => store.friend.)
  return (
    <div className="main">
      <div className="main__left">
  {allFriends.map(friend=><div>{friend.username}</div>)}
      </div>
      <div className="main__right">right</div>
    </div>
  )
}
