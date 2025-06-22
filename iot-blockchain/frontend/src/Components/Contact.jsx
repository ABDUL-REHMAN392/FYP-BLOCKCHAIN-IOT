import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    // Show toast message on success
    toast.success("Thank you! We'll get back to you shortly.");

    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5479f7] mb-4">Let’s Connect</h2>
          <p className="text-gray-400 text-lg">
            Have a question, idea, or opportunity? Reach out through the form below, and we’ll respond promptly.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-xl shadow-xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 px-6 py-3 rounded-lg text-white font-semibold text-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;
