import React, { useEffect, useRef } from 'react'
import '../styles/Main.css'
import { useSelector, useDispatch } from 'react-redux'
import { addActiveFriend, addMessages } from '../store/friend'
import { db } from '../firebase';
import Message from './Message';
export default function Main({allFriends}) {
  const dispatch = useDispatch();
  const currentFriendUid = useSelector(store => store.friend.currentFriend.uid);
  const currentUserUid  = useSelector(store => store.user.uid);
  const allmsg = useSelector(store=> store.friend.messages);
  useEffect(()=>{
    db.collection('messages').onSnapshot(snapshot=>{
      const msg = [];
       snapshot.docs.forEach(doc=>{
         if((doc.data().toUid === currentFriendUid && doc.data().fromUid === currentUserUid) || (doc.data().toUid === currentUserUid && doc.data().fromUid === currentFriendUid) )
         msg.push(doc.data());
       });
       msg.sort((a, b)=> a.timestamp > b.timestamp ? 1: -1)
       dispatch(addMessages(msg))

    })
  },[currentFriendUid]);
  
  const onClickHandler = (friend)=>{
    dispatch(addActiveFriend(friend));
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [allmsg]);
  // const friends = useSelector(store => store.friend.)
  return (
    <div className="main">
      <div className="main__left">
  {allFriends.map((friend, idx)=><div key = {idx} className="main__left__user" onClick={()=>onClickHandler(friend)}>{friend.username}</div>)}
      </div>
      <div className="main__right">
        {!currentFriendUid && <h1>Happy chating...</h1>}
        {currentFriendUid && (
          allmsg.map((msg, idx)=><Message key = {idx} msg = {msg} />)
        )}
         <div ref={messagesEndRef} />
      </div>
    </div>
  )
}
