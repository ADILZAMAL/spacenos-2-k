import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/Message.css'
export default function Message({msg}) {
  const fromUid = useSelector(store=> store.user.uid);
  const fromUsername = useSelector(store=> store.user.username);
  const toUsername = useSelector(store=> store.friend.currentFriend.username);
  let flag = false;
  const h = ((new Date(msg.timestamp?.seconds *1000)) ).getHours();
  const m = (new Date(msg.timestamp?.seconds * 1000)).getMinutes();
  let t = "";
  if(h<12)
  t +=(h);
  else if(h>12){
    t +=(h%12);
    flag = true;
  }
  t+=":";
  t+=m; 
if(!flag)
t+="am";
else
t+="pm"
  return (
    <div className={`${msg.fromUid === fromUid ? "msg__right msg":"msg__left msg"}`}>
      <div>
      <div className="msg__username">
        {msg.fromUid === fromUid && <p>{fromUsername}</p>}
        {msg.fromUid !== fromUid && <p>{toUsername}</p> }
      </div>
      <div className="msg__message">{msg.message}</div>
      <div className="msg__time">
        < p>{t}</p>
      </div>
      </div>
      
    </div>
  )
}
