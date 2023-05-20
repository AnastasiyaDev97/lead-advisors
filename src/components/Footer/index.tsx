import style from './Footer.module.scss';

import commonStyles from 'styles/Container.module.scss';
import { ReturnComponentType } from 'types';

export const Footer = (): ReturnComponentType => {
  return (
    <footer className={style.footerBlock}>
      <div className={commonStyles.container}>
        <div className={style.footerInner}>sdsd</div>
      </div>
    </footer>
  );
};
