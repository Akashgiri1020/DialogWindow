"use client"
import React from 'react';

const Dialog = ({ open, handleClose,children }) => {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        {children}
      </div>
    </div>
  );
};

export default Dialog;
