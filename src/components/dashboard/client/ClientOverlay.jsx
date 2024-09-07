/* eslint-disable react/prop-types */
function ClientOverlay({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="w-full h-full fixed top-0 left-0 backdrop-blur-[1.5px]"
    ></div>
  );
}

export default ClientOverlay;
