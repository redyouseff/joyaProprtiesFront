import React from 'react'

function BuyPropertyLocation() {
  return (
    <div className="w-full h-full  text-[#faf8f7] p-4 pb-20">
      <div className="flex justify-center items-center">
        <div className="w-full">
          <div className="block presentation">
            <div className="left fade-right" data-scroll data-scroll-repeat>
              <h2 className="text-lg md:text-xl font-thin mb-6">
                <span>Property location</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="relative overflow-hidden">
          {/* Replace this part with your actual map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.537415570273!2d55.2637303!3d25.2445114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432723200001%3A0x69837292a571996!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1702276117169!5m2!1sen!2sus"
            className="w-full h-[450px] md:h-[500px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default BuyPropertyLocation;