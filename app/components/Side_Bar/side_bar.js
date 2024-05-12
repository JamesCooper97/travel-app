import Style from './sidebar.module.css'; // Import your sidebar styles

export default function ModalContent({ onClose }) {
    return (
      <div className={Style.modal}>
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    );
  }