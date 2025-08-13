import ContactForm from "./ContactForm.jsx";
import ContactText from "./ContactText.jsx";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;