import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    // Prevent scrolling of the body when the modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClickOutside = (event) => {
    // Check if the click is outside the modal content
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); // Close the modal if clicked outside
    }
  };

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleClickOutside} // Close modal on overlay click
    >
      <div
      data-theme="light"
        ref={modalRef}
        className=" rounded-lg shadow-lg p-6 w-full max-w-md h-auto max-h-[90vh] overflow-y-auto scrollbar-hide relative" // Set max height and enable scrolling
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up to the overlay
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times; {/* Close button */}
        </button>
        {children} {/* Render the children passed to the modal */}
      </div>
    </div>
  );
};

export default Modal;
