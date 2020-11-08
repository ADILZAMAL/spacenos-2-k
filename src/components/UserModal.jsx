import React from 'react'
import Modal from 'react-modal';
import '../styles/Modal.css';
import { useSelector } from 'react-redux'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default function UserModal({ modalIsOpen, closeModal, users, setFriends}) {
  const isLoading = useSelector(store => store.friend.isLoading);
  console.log(users)
  return (
    <div>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {!isLoading&& 
            < div className="modal">
              {users.map(user=><div className="modal__user" onClick={()=>{setFriends(user)}}>{user.username}</div>)}
              <button className="modal__button" onClick={closeModal}>close</button>
            </div>
}
{isLoading &&

  <div className="modal">
    <p>Loading...</p>
  </div>
}
 
        </Modal>
    </div>
  )
}
