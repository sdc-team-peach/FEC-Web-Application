import React from 'react';
import { ModalWrapper } from './Modal.styles';
import AddReview from './AddReview';

// eslint-disable-next-line react/prop-types
function Modal({ addReview, compare }) {
  return (
    <ModalWrapper>
      {addReview && <AddReview />}
      {compare && <div> compare </div>}
    </ModalWrapper>

  );
}

export default Modal;
