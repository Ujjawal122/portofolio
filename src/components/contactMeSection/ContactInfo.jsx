// ContactInfo.jsx
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo.jsx";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ujjawalkaushal@123gmail.com" Icon={HiOutlineMail} />
      <SingleInfo text="+91 9005248547" Icon={FiPhone} />
      <SingleInfo text="New Delhi, INDIA" Icon={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
