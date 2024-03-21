import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target) setForm({ ...form, [e.target.name]: e.target.value})
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const emailForm = {
      from_name: form.name,
      to_name: "Briana",
      from_email: form.email,
      to_email: "bkaenoll@gmail.com",
      message: form.message,
    }
    
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      emailForm,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      // TODO: Show success message
      // TODO: Hide an alert
      setForm({ name: '', email: '', message: '' });
    }).catch((error: Error) => {
      setIsLoading(false);
      console.log(error);
      // TODO: Show error message
    })
  };

  return (
    <motion.section
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="relative max-container w-full z-10"
    >
      <h1 className="head-text text-white">Get in touch</h1>
      <form
        className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
      >
        <label className="text-white font-semibold">
          Name
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Jane"
            autoComplete="off"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className="text-white font-semibold">
          Email
          <input
            type="email"
            name="email"
            className="input"
            placeholder="jane@email.com"
            autoComplete="off"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="text-white font-semibold">
          Your message
          <textarea
            name="message"
            rows={4}
            className="textarea"
            placeholder="Connect with me!"
            autoComplete="off"
            required
            value={form.message}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="btn"
          disabled={isLoading}
        >
          {isLoading ? 'Sending' : 'Send message'}
        </button>
      </form>
    </motion.section>
  )
}

export default Contact