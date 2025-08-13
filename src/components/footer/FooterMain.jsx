import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <div className="px-4">
      {/* Divider line */}
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      {/* Links */}
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey">Ujjawal Kaushal</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                activeClass="text-white" // Highlight when section is active
                spy={true}
                smooth={true}
                duration={500}
                offset={-120} // Adjust for navbar height
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer bottom */}
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Ujjawal | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
