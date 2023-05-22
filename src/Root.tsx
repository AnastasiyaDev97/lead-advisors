import { memo } from 'react';

import { Layout } from 'components';
import { ModalProvider } from 'components/Modal/ModalProvider';
import { ReturnComponentType, WithChildrenType } from 'types';

type RootPropsType = WithChildrenType;

export const Root = memo(({ children }: RootPropsType): ReturnComponentType => {
  return (
    <>
      <ModalProvider>
        <Layout>{children}</Layout>
      </ModalProvider>
    </>
  );
});
