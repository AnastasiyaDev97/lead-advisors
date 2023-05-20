import { Fragment } from 'react';

import style from './Layout.module.scss';

import { Footer, Header } from 'components';
import { ReturnComponentType, WithChildrenType } from 'types';

type LayoutPropsType = WithChildrenType;

export const Layout = ({ children }: LayoutPropsType): ReturnComponentType => {
  return (
    <Fragment>
      <div className={style.layoutContainer}>
        <Header />
        <main className={style.mainBlock}>
          <div className=".container">{children}</div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};
