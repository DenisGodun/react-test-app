import './Modal.css';

function Modal({modalClose}) {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-content">
          <div>Modal Title</div>
          <div>Modal text and <a href="#">link</a></div>
        </div>
        <button className="modal-close" onClick={modalClose}>&times;</button>
      </div>
    </div>
  )
}

export default Modal