import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function BuyPropertyAgent() {
  return (
    <div className="agent -ml-3 transition-all duration-700 ease-in-out transform translate-x-10 opacity-0 animate-fadeIn flex flex-wrap items-center mb-10">
      <div className="image w-36">
        <a href="https://www.joyaproperties.ae/en/member/taz-graves/">
          <img
            src="/images/projects/agent/01-agent.png"
            alt="Taz Graves"
            width={150}
            height={150}
            className="rounded-full object-cover w-[150px] h-[150px] grayscale"
          />
        </a>
      </div>
      <div className="informations pl-10 flex-1">
        <div className="description mb-5">
          <h3 className="text-xl font-semibold text-[#faf8f7]">
            <a href="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              Nabeel Hammudeh
            </a>
          </h3>
        </div>
        <div className="contact">
          <ul className="space-y-3">
            <li className="phone">
              <a
                href="tel:+971585734777"
                target="_blank"
                rel="nofollow"
                className="flex items-center text-[#faf8f7] hover:text-[#f0ede6] transition-all"
              >
                <span className="circle w-10 h-10 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-phone text-[#faf8f7]"></i>
                </span>
                <span className="name pl-4 text-sm uppercase font-medium">
                  Call now
                </span>
              </a>
            </li>
            <li className="whatsapp">
              <a
                href="https://wa.me/+971585734888"
                target="_blank"
                rel="nofollow"
                className="flex items-center text-[#faf8f7] hover:text-[#f0ede6] transition-all"
              >
                <span className="circle w-10 h-10 flex items-center justify-center rounded-full">
                  <i className="fa-brands fa-whatsapp text-[#faf8f7]"></i>
                </span>
                <span className="name pl-4 text-sm uppercase font-medium">
                  Send us a message
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BuyPropertyAgent;
