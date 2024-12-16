import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios"; // Make sure to import your axios instance
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Fetch contact info
const fetchContactInfo = async () => {
  const response = await axiosInstance.get("/contact");
  return response.data[0]; // Return the first item from the array
};

const Footer = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['contact'],  // Query key for caching
    queryFn: fetchContactInfo, // Function to fetch contact data
  });

  // Check for loading or error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching contact data</div>;

  return (
    <footer className="bg-[#041d1a] text-[#f4f3ef] py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start justify-items-center text-center lg:text-left">
          {/* Brand Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-extrabold text-[#a0b3b1] mb-4">
              Joya Properties
            </h3>
            <p className="text-base text-[#f0ede6]/80">
              Discover breathtaking residences that redefine elegance and
              exclusivity, curated just for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#a0b3b1]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/Projects" },
                { name: "Services", href: "/Services" },
                { name: "About Us", href: "/About" },
                { name: "Contact", href: "/Contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#3d6a64] transition-all ease-in-out duration-300 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#a0b3b1]">
              Contact Us
            </h4>
            <p className="text-base text-[#f0ede6]/80 mb-1">
             Dubai, Business Bay, Prime Tower 1401
            </p>
            <p className="text-base text-[#f0ede6]/80 mb-1">
              Phone: {data?.phone || "N/A"}
            </p>
            <p className="text-base text-[#f0ede6]/80 mb-1">
              Email: {data?.email || "N/A"}
            </p>
            <p className="text-base text-[#f0ede6]/80 mb-1">
              Map URL:{" "}
              <a href={data?.mapUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400">
               View Map
              </a>
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              {[
                { icon: Facebook, href: data?.facebook || "#" },
                { icon: Twitter, href: data?.twitter || "#" },
                { icon: Instagram, href: data?.instagram || "#" },
                { icon: Linkedin, href: data?.linkedin || "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3d6a64] transition-all ease-in-out duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col items-center lg:items-start">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.974367987845!2d55.2693273153665!3d25.18840738389598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682d1ff90fe7%3A0x14375ae978cdf590!2sPrime%20Tower%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1698342856565!5m2!1sen!2sae"
    width="280"
    height="200"
    style={{ border: 0 }}
    loading="lazy"
    className="rounded-lg mb-2"
  ></iframe>
          </div>

        </div>

        {/* Divider Line & Copyright */}
        <div className="mt-10 pt-6 border-t border-[#111810] text-center">
          <p className="text-sm text-[#f0ede6]/60">
            &copy; 2024 Joya Properties{" "}
            <a
              href="https://www.siimedia.net/"
              className="text-[#faf8f7] font-bold transition-all duration-300 hover:text-opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Sii Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
