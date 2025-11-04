import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiUser,
  FiSend,
  FiMessageSquare,
} from "react-icons/fi";

export default function ContactMe() {
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

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields!");
      return;
    }

    emailjs
      .send(
        "service_br8b0ck",
        "template_qgh14ee",
        formData,
        "BPrd_t3SZXhWVNRZt"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact">
      <div className="min-h-screen bg-(--color-light) flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <h2 className="text-center">Get in Touch</h2>

          <div className="relative">
            <div className="relative bg-white rounded-lg shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-(--color-green)">
                      <FiUser size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-(--color-blue) transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-(--color-green)">
                      <FiMail size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-(--color-blue) transition-colors"
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-4 text-(--color-green)">
                    <FiMessageSquare size={20} />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="6"
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-(--color-blue) transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                  >
                    <FiSend size={18} />
                    Send Message
                  </button>
                </div>
              </form>

              {status && (
                <div className="text-center text-(--color-green) font-medium mt-4">
                  {status}
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/namithajosf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-black transition-colors"
            >
              <FiGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/namithajosf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-sky-700 transition-colors"
            >
              <FiLinkedin size={28} />
            </a>
            <a
              href="mailto:namithajosf@gmail.com"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              <FiMail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
