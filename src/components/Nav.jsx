import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-8 py-8 sm:px-16 z-10 absolute w-full ">
      <nav className="flex justify-between mx-auto max-w-[1440px]">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden items-center">
          {navLinks.map((link, index) => (
            <a
              className="font-montserrat text-lg leading-normal text-slate-500"
              key={index}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </ul>
        <img
          className="lg:hidden"
          src={hamburger}
          alt="hamburger"
          width={25}
          height={25}
        />
      </nav>
    </header>
  );
};

export default Nav;
