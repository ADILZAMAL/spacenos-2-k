import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { db } from '../firebase';
import '../styles/Footer.css'
export default function Footer({openModal}) {
  const fromUid = useSelector(store=>store.user.uid);
  const toUid = useSelector(store=>store.friend.currentFriend.uid);
  const [message, setMessage] = useState('');
  const onClickHandler = () =>{
    if(message.trim().length === 0)
    {
      alert('Please enter text');
      return;
    }
    db.collection('messages').add({
      message,
      toUid,
      fromUid,
      timestamp: new Date()
    })
    setMessage('');
  }
  return (
    <div className="footer">
      <div className="footer__left">
      <h1 onClick={(e)=>{
        openModal();
      }}>&#43;</h1>
      </div>
      <div className="footer__right">
        <input type="text" placeholder="new message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button onClick={onClickHandler}>send</button>
      </div>
    </div>
  )
}
