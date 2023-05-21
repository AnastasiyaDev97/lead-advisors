import { memo } from 'react';

import { ReturnComponentType, WithChildrenType } from 'types';

type LinkPropsType = {
  href: string;
} & WithChildrenType;

export const ExternalLink = memo(
  ({ href, children }: LinkPropsType): ReturnComponentType => {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  },
);
