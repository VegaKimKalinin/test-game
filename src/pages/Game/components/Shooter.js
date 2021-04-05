import React from 'react';

const Shooter = (props) => {
  const { user, imgPath } = props;

  const getShooterOptions = (user) => (
    <div className='shooter__options'>
      <span>{`Игрок : ${user.userName}`}</span>
      <span>{`Сила: ${user.force}`}</span>
      <span>{`Ловкость: ${user.agility}`}</span>
      <span>{`Интелект: ${user.intelligence}`}</span>
      <span>{`Харизма: ${user.charisma}`}</span>
      <span>{`Уклонение: ${user.evasion}`}</span>
      <span>{`Энергичность: ${user.energy}`}</span>
    </div>
  );

  return (
    <div className='shooter'>
      {getShooterOptions(user)}
      <img src={imgPath} alt='игрок' />
      <div>
        <button>Огонь</button>
      </div>
    </div>
  );
};

export default Shooter;
