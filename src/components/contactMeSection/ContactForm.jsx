import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate email sending logic here
  };

  return (
    
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        style={{ zIndex: 1 }} // Ensures nothing overlaps
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="h-12 rounded-lg bg-slate-700 px-3 text-white 
                     placeholder-gray-300 placeholder-opacity-70
                     focus:outline-none focus:ring-2 focus:ring-slate-400 
                     focus:bg-slate-600 focus:text-white 
                     transition-all duration-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="h-12 rounded-lg bg-slate-700 px-3 text-white 
                     placeholder-gray-300 placeholder-opacity-70
                     focus:outline-none focus:ring-2 focus:ring-slate-400 
                     focus:bg-slate-600 focus:text-white 
                     transition-all duration-300"
        />

        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="rounded-lg bg-slate-700 p-3 text-white 
                     placeholder-gray-300 placeholder-opacity-70
                     focus:outline-none focus:ring-2 focus:ring-slate-400 
                     focus:bg-slate-600 focus:text-white 
                     transition-all duration-300"
        />

        <button
          type="submit"
          className="w-full rounded-lg border border-slate-400 text-white h-12 font-bold text-xl 
                     bg-slate-700 transition-all duration-500 
                     hover:bg-sky-500 hover:border-sky-400 hover:shadow-lg 
                     hover:shadow-sky-300/50"
        >
          Send
        </button>
      </form>
    
  );
};

export default ContactForm;
