import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
import { useState } from 'react';
import { close } from '../assets/icons';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" absolute padding-x py-8 w-full z-50">
      <nav className=" flex justify-between items-center max-container relative">
        <a href="/">
          <img src={headerLogo} alt="Header Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map(item => (
            <li key={item.label}>
              {' '}
              <a href={item.href} className=" font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block cursor-pointer">
          <img src={hamburger} alt="Hamburger" width={25} height={25} onClick={handleOpen} />
        </div>
      </nav>
      {isOpen && (
        <div className=" fixed top-0 left-0 bottom-0 w-full max-h-[100vh] bg-white z-50 ">
          <img
            className=" absolute right-10 top-10 cursor-pointer"
            src={close}
            alt="Hamburger"
            width={75}
            height={25}
            onClick={handleOpen}
          />
          <ul className="w-full h-full flex flex-col justify-center items-center gap-20">
            {navLinks.map(navlink => (
              <li key={navlink}>
                <a onClick={handleOpen} className=" font-bold font-montserrat text-2xl" href={navlink.href}>
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
