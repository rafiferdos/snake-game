import './Alert.css';
import React from 'react';

const Alert = ({ isGameOver, score, highScore }) => {
    const alertClass = isGameOver ? 'space' : 'space-hidden';

    return (      
    <div className={alertClass}>
      <div className="box">
        <p className="alert-msg">Game Over</p>
        <p className="last-score">Last Score: {score}</p>
        <p className="high-score">High Score: {highScore}</p>
        <button className='restart' onClick = {() => window.location.reload()}>Restart</button>
      </div>
    </div>
  );
};

export default Alert;
