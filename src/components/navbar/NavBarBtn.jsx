import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-lg font-bold font-body text-white 
      border-cyan border flex items-center gap-2
      bg-gradient-to-r from-darkCyan to-orange 
      transition-all duration-500 
      hover:scale-110 hover:border-orange 
      hover:bg-slate-300/20 hover:from-slate-300/20 hover:to-slate-300/20 
      hover:shadow-cyanShadow cursor-pointer hover:text-cyan-400"
    >
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <span className="hidden md:block">
        <LuArrowDownRight />
      </span>
    </button>
  );
};

export default NavbarBtn;
