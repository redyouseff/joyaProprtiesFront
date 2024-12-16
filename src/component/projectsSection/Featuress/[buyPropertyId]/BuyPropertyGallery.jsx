import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderCarousel.module.css";

// الصور الافتراضية
const defaultImages = [
  "/upload/img/DSC05164Edit.jpg",
  "/upload/img/DSC05229Edit.jpg",
  "/upload/img/DSC05239Edit.jpg",
  "/upload/img/DSC05249Edit.jpg",
  "/upload/img/DSC05319Edit.jpg",
  "/upload/img/DSC05324Edit.jpg",
  "/upload/img/DSC05341.jpg",
  "/upload/img/DSC05414Edit.jpg",
  "/upload/img/DSC05424Edit.jpg",
  "/upload/img/DSC05434Edit.jpg",
  "/upload/img/DSC05444Edit.jpg",
  "/upload/img/DSC05454Edit.jpg",
  "/upload/img/DSC05469Edit.jpg",
  // يمكن إضافة المزيد من الصور إذا لزم الأمر
];

function BuyPropertyGallery({ modalIsOpen, closeModal, activeIndex, images = defaultImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
    >
      <button onClick={closeModal} className={styles.closeButton}>
        &times; {/* زر الإغلاق */}
      </button>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img
              src={"https://www.luxuryliving.ae" + image}
              alt={`Slide ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </Modal>
  );
}

export default BuyPropertyGallery;
