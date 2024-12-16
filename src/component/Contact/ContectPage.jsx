import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import axios from "axios"; // Import Axios
import "aos/dist/aos.css";
import AOS from "aos";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    requirements: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState(""); // State for description

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
    
    // Fetch description on mount
    const fetchDescription = async () => {
      try {
        const response = await axios.get("https://joyaproprties.onrender.com/api/contact");
        setDescription(response.data[0].description); // Set the description from the API response
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchDescription();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS configuration
    const serviceID = "service_ilefvo6"; // Replace with your EmailJS Service ID
    const templateID = "template_dc6kmkr"; // Replace with your EmailJS Template ID
    const userID = "GtzuqIcMj0j1jSSMN"; // Replace with your EmailJS User ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          budget: "",
          requirements: "",
        });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setMessage("An error occurred. Please try again later.");
        setIsSending(false);
      });
  };

  return (
    <section className="w-full min-h-screen bg-[#111612] text-[#EFECE6]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="contacts py-12 text-white pt-32 bb-16 overflow-x-hidden">
          <div className="container mx-auto">
            <div className="text-center">
              <motion.div
                className="line1"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h2 className="text-5xl lg:text-[90px] font-light leading-none">
                  Contact us
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-4 lg:px-0">
              {/* Form Section */}
              <motion.div
                className="form"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <p className="text-xl uppercase text-[#9da5a4] mb-6">
                  Reach out to our team
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="* Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="* Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="* Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                      required
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="Location (Country of residence)"
                      value={formData.location}
                      onChange={handleChange}
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                    />
                  </div>

                  <textarea
                    name="requirements"
                    rows={5}
                    placeholder="Requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="p-4 mt-6 w-full bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                  ></textarea>

                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <input
                      type="text"
                      name="budget"
                      placeholder="Budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="p-4 bg-[#111612] border border-[#698f8c] placeholder-[#9da5a4] focus:outline-none rounded-md"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`mt-6 px-6 py-3 ${
                      isSending ? "bg-gray-500" : "bg-[#698f8c] hover:bg-[#a0b3b1]"
                    } text-white rounded-md font-medium`}
                  >
                    {isSending ? "Sending..." : "Send Request"}
                  </button>
                </form>
                {message && <p className="mt-4 text-green-500">{message}</p>}
              </motion.div>

              {/* Side Section */}
              <motion.div
                className="side"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              >
                <div className="text text-[#9da5a4]">
                  <p className="mb-6">{description}</p> {/* Display the fetched description */}
                </div>

                {/* Map Section */}
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.998915856884!2d55.2612381!3d25.1884074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682d1ff90fe7%3A0x14375ae978cdf590!2sPrime%20Tower%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1604414715792!5m2!1sen!2sae"
                    width="100%"
                    height="350"
                    style={{ border: 0, marginTop: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;