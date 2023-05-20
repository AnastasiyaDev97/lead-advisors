import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import style from './Header.module.scss';

import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
  return (
    <header>
      <div className=".container">
        <div className={style.logoContainer}>
          <NavLink to={'/'}>
            <img src={logo} alt="Logotype" className={style.logoIcon} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
