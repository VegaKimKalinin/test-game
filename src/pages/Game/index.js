import React from 'react';
import './Game.scss';
import { shoterImg } from './../../constant/img';
import { useSelector } from 'react-redux';

import Shooter from './components/Shooter';

const Game = () => {
  const { user } = useSelector((state) => state);
  console.log(user);

  return (
    <main>
      <div className='container'>
        <div className='battle-field'>
          <Shooter user={user} imgPath={shoterImg} />
          <Shooter user={user} imgPath={shoterImg} />
        </div>
      </div>
    </main>
  );
};
export default Game;
