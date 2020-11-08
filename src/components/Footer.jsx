import React from 'react'
import '../styles/Footer.css'
export default function Footer({openModal}) {
  return (
    <div className="footer">
      <div className="footer__left">
      <h1 onClick={(e)=>{
        openModal();
      }}>&#43;</h1>
      </div>
      <div className="footer__right">
        <input type="text" placeholder="new message"/>
        <button>send</button>
      </div>
    </div>
  )
}
