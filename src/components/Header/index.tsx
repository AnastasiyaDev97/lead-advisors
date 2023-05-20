import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import style from './Header.module.scss';

import commonStyles from 'styles/Container.module.scss';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
  return (
    <header className={style.headerBlock}>
      <div className={commonStyles.container}>
        <div className={style.logoContainer}>
          <NavLink to={'/'}>
            <img src={logo} alt="Logotype" className={style.logoIcon} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
