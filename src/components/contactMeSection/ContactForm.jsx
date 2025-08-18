import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setStatus("Sending...");
=======

    setStatus("Sending...");
   
>>>>>>> c20ad9847eb79a573c55e3f4a0646f12a481cf8c

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
<<<<<<< HEAD
          setStatus("✅ Message sent successfully!");
=======
          setStatus("Message sent successfully!");
>>>>>>> c20ad9847eb79a573c55e3f4a0646f12a481cf8c
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
<<<<<<< HEAD
          setStatus("❌ Failed to send. Please try again.");
=======
          setStatus("Failed to send message. Please try again.");
>>>>>>> c20ad9847eb79a573c55e3f4a0646f12a481cf8c
        }
      );
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
=======
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      style={{ zIndex: 1 }}
    >
>>>>>>> c20ad9847eb79a573c55e3f4a0646f12a481cf8c
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
<<<<<<< HEAD
        className="h-12 rounded-lg bg-slate-700 px-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
=======
        className="h-12 rounded-lg bg-slate-700 px-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300"
>>>>>>> c20ad9847eb79a573c55e3f4a0646f12a481cf8c
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
<<<<<<< HEAD
        className="h-12 rounded-lg bg-slate-700 px-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
      />
      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="rounded-lg bg-slate-700 p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
      />
      <button
        type="submit"
        className="w-full rounded-lg border border-slate-400 text-white h-12 font-bold text-lg bg-slate-700 transition-all hover:bg-sky-500 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-300/50"
      >
        Send
      </button>
      {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
=======
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
>>>>>>> c20ad9847eb79a573c55e3f4a0646f12a481cf8c
    </form>
  );
};

export default ContactForm;
