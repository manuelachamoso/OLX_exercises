function Modal({ setToggle, description, title }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                setToggle(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
            <h2>{title}</h2>
        </div>
        <div className="body">
            <p>{description}</p>
        </div>
        <div className="footer">
        <button
            onClick={() => {
              setToggle(false);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;