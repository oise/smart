import './header.scss';
import classNames from 'classnames';
import { FC } from 'react';

interface HeaderProps {
  showBorder?: boolean;
  heading: string;
}

const Header: FC<HeaderProps> = ({ children, showBorder = true, heading }) => {
  const classes = classNames('header-container', {
    border: showBorder
  });

  return (
    <header className={classes}>
      <div className='header-heading h1'>{heading}</div>
      {children}
    </header>
  );
};

export default Header;
