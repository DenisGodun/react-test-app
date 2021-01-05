import './App.css';

import React, { useState } from 'react'
import Modal from './Modal/Modal'
import { useCookies } from 'react-cookie'

function App() {
  const [showModal, setshowModal] = useState(false)
  const [cookies, setCookie] = useCookies(['promotion'])
  
  function hideModal() {
    setshowModal(false);      
  }
  
  if(cookies.promotion !== '1') {
    const nowDay = new Date().getDate()
    if(nowDay === 5 || nowDay === 6) {
      setTimeout( () => {
        setCookie('promotion', 1, { path: '/' })
        setshowModal(true)
      }, 10000)
    }   
  }
  
  return (
    <div className="wrapper">
      
      { 
        showModal && <Modal modalClose={hideModal} />
      }
      <div>Simple text</div>
    </div>
  );
}

export default App;
