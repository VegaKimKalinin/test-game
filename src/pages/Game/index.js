import React from 'react';
import './Game.scss';
import { shoterImg } from './../../constant/img';
import { useSelector } from 'react-redux';

const Game = () => {
  const { user } = useSelector((state) => state);
  console.log(user);

  return (
    <main>
      <div className='container'>
        <div className='battle-field'>
          <div className='shooter shooter_red'>
            <span>{user.userName}</span>
            <img src={shoterImg} />
          </div>
          <div className='shooter shooter_green'>
            <img src={shoterImg} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Game;
