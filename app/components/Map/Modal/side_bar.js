import { createPortal } from "react-dom";
import Style from "./sidebar.module.css"; 
// Import sidebar styles

export default function ModalContent({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (createPortal(
    <div className={Style.modal}>
      <button onClick={onClose}>Close</button>
      { children }
    </div>,
    document.body
  ));
};