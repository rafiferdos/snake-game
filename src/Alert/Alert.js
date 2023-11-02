import './Alert.css';
import React from 'react';

const Alert = ({ isGameOver }) => {
    const alertClass = isGameOver ? 'space' : 'space-hidden';

    return (      
    <div className={alertClass}>
      <div className="box">
        <p className="alert-msg">Game Over</p>
        <button className='restart'>Restart</button>
      </div>
    </div>
  );
};

export default Alert;
