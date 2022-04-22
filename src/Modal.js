import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModelOpen,closeModel,correct,questions} = useGlobalContext()
  return (
    <div className={`${isModelOpen ? 'modal-container isOpen':'modal-container'}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>you answered {((correct/questions.length)*100).toFixed(0)}% of questions correctely</p>
        <button className="close-btn" onClick={closeModel}>
          play again
        </button>
      </div>
    </div>
  )
}

export default Modal
