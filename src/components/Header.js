import React from 'react';
import './Header.scss';

function Header({score, steps, activeStepIndex}) {
  const stepItems = steps.map((item, index) => {
    const isActive = activeStepIndex === index;

    return (
      <li key={index} className={'header__step' + (isActive ? ' header__step_active' : '')}>
        {item}
      </li>
    );
  });

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">SongBird</div>
        <div className="header__score">Score: <b>{score}</b></div>
      </div>
      <ul className="header__step-list">
        {stepItems}
      </ul>
    </header>
  );
}

export default Header;
