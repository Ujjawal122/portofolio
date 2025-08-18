import NavbarLogo from "./NavBarLogo.jsx";
import NavbarLinks from "./NavBarLinks.jsx";
import NavbarBtn from "./NavBarBtn.jsx";
import NavbarToggler from "./NavBarToggler.jsx";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-20">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4
        bg-slate-200/20 backdrop-blur-sm border-orange border-[0.5px]
        rounded-full mt-2"
      >
        {/* Logo */}
        <NavbarLogo />

        {/* Links (responsive) */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        {/* Button always visible */}
        <div className="hidden sm:hidden lg:block">
          <NavbarBtn />
        </div>

        {/* Hamburger for small screens */}
        <div className="lg:hidden sm:block">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
