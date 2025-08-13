import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 z-50 relative">
      <SingleContactSocial
        link="https://linkedin.com/in/ujjawal-kaushal-000184296"
        Icon={FaLinkedinIn}
        hoverColor="text-blue-400"
      />
      <SingleContactSocial
        link="https://github.com/Ujjawal122"
        Icon={FiGithub}
        hoverColor="text-gray-400"
      />
      <SingleContactSocial
        link="https://www.instagram.com/kaushalujjawal"
        Icon={FaInstagram}
        hoverColor="text-pink-400"
      />
    </div>
  );
};

export default ContactSocial;
