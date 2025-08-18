import ContactInfo from "./ContactInfo.jsx";
import ContactSocial from "./ContactSocial.jsx";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:w-1/2">
      <img
        src="/images/email-image.png"
        alt="email illustration"
        className="max-w-[220px] md:max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
