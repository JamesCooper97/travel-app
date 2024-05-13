import Style from "./sidebar.module.css"; 
// Import sidebar styles

export default function ModalContent({ onClose }) {
    return (
      <div className={Style.modal}>
        <div>I&apos;m a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }