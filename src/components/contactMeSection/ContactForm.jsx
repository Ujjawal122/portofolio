import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");
    
    console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);


    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      style={{ zIndex: 1 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="h-12 rounded-lg bg-slate-700 px-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="h-12 rounded-lg bg-slate-700 px-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300"
      />
      <textarea
        name="message"
        rows="9"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="rounded-lg bg-slate-700 p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300"
      />
      <button
        type="submit"
        className="w-full rounded-lg border border-slate-400 text-white h-12 font-bold text-xl bg-slate-700 transition-all duration-500 hover:bg-sky-500 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-300/50"
      >
        Send
      </button>
      {status && <p className="text-sm text-gray-300">{status}</p>}
    </form>
  );
};

export default ContactForm;
