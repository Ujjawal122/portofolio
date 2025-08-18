import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul
      className="
        flex lg:flex-row sm:flex-col gap-6 text-white font-body
        lg:relative sm:absolute sm:top-[100%] sm:left-0 sm:right-0
        lg:text-md sm:text-lg
        sm:bg-slate-900/90 sm:backdrop-blur-md
        sm:rounded-xl sm:shadow-lg sm:shadow-slate-500/20
        sm:w-[90%] sm:mx-auto py-4 px-6 sm:mt-4
        transition-all duration-500
      "
    >
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan-400 transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
