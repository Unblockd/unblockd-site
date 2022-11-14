import Link from 'next/link';
import { useState } from 'react';
import ThemeToggler from '../../components/theme-toggler/theme-toggler';

/* eslint-disable-next-line */
export interface NavbarProps {}

export const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Blog',
    path: '/blog',
  },
];

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <section>
      <nav className="text-my-light-text dark:text-my-dark-text bg-my-light-component dark:bg-my-dark-component border-my-light-border dark:border-my-dark-border z-0 border-b">
        <div className="flex justify-evenly py-8 text-xl">
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                <a className="hover:brightness-90">
                  {link.name}
                </a>
              </Link>
            );
          })}
          <ThemeToggler></ThemeToggler>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
