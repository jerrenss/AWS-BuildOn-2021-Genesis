import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { handleOnCloseClick } = props;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        className="ui dimmer modals visible active"
        style={{
          position: 'fixed',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="ui standard full screen modal visible active">
          <i class="close icon" onClick={handleOnCloseClick}></i>
          <div
            className="ui center aligned header"
            style={{
              backgroundColor: `${props.color}`,
              color: `${props.headerColor}`,
            }}
          >
            {props.description}
          </div>
          <div className="content">{props.content}</div>
          <div className="actions" style={{ textAlign: 'center' }}>
            {props.actions}
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
