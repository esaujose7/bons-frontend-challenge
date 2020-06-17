import React from 'react'
import './styles.scss';

const Modal: React.FC = ({ children }) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <section className="modal-card-body center-content" style={{ display: 'flex' }}>
        {children}
      </section>
    </div>
  </div>
);

export default Modal;
