import ContactMeLeft from "./ContactMeLeft.jsx";
import ContactMeRight from "./ContactMeRight.jsx";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center text-cyan">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-12 bg-slate-600 p-6 md:p-10 rounded-2xl">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
