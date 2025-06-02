import React, { ReactNode } from 'react';

type ScrollLinkProps = {
  to: string;
  children: ReactNode;
};

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;