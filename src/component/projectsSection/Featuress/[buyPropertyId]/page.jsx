import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BuyPropertyVisualImage from "./BuyPropertyVisualImage";
import BuyPropertyGallery from "./BuyPropertyGallery";
import BuyPropertyInfo from "./BuyPropertyInfo";
import BuyPropertyAgent from "./BuyPropertyAgent";
import BuyPropertyText from "./BuyPropertyText";
import BuyPropertySimilarProperties from "./BuyPropertySimilarProperties";
import BuyPropertyLocation from "./BuyPropertyLocation";

const Page = ({ buyPropertyId }) => {
  const [featureProperty, setFeatureProperty] = useState(null);

  const getFeatureProperties = async () => {
    const prodId = buyPropertyId.split("__")[1];
    const data = await fetch(
      `https://joya-backend-deploy-test.vercel.app/property/get-property-by-id?buyPropertyId=${prodId}`,
      {
        cache: "force-cache",
      }
    );
    const res = await data.json();
    setFeatureProperty(res.buyProperty);
  };

  useEffect(() => {
    getFeatureProperties();
  }, [buyPropertyId]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    if (featureProperty?.title) {
      document.title = `${featureProperty.title} | Joya Properties`;
    }
  }, [featureProperty]);

  return (
    <div className="bg-[#111612] overflow-hidden ">
      <div data-aos="fade-up">
        <BuyPropertyVisualImage
          location={featureProperty?.location ?? ""}
          price={featureProperty?.price ?? 0}
          visualImage={featureProperty?.coverImage ?? ""}
        />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-[80px]">
          <div data-aos="fade-left">
            <BuyPropertyGallery images={featureProperty?.images ?? []} />
          </div>
          <div>
            <div data-aos="fade-up">
              <BuyPropertyInfo info={featureProperty?.details} />
            </div>
            <div data-aos="fade-right">
              <BuyPropertyAgent />
            </div>
            <div data-aos="fade-up">
              <BuyPropertyText description={featureProperty?.description ?? ""} />
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <BuyPropertyLocation />
        </div>
        <div data-aos="fade-up">
          <BuyPropertySimilarProperties />
        </div>
      </div>
    </div>
  );
};

export default Page;
