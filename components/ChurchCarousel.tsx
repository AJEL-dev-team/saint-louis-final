"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

Modal.setAppElement("#root");

const churches = [
  {
    id: 1,
    name: "St. Mary's Church",
    description: "A beautiful church in the heart of the city.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7327960709886!2d9.67048917412181!3d4.074758146767635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113ca2a7fb813%3A0x5a0eb56f2ca5578!2sParoisse%20Saint%20Louis%20de%20Bonaberi!5e0!3m2!1sen!2szm!4v1725117037037!5m2!1sen!2szm",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "St. John's Church",
    description: "A historic church with a rich heritage.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7327960709886!2d9.67048917412181!3d4.074758146767635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113ca2a7fb813%3A0x5a0eb56f2ca5578!2sParoisse%20Saint%20Louis%20de%20Bonaberi!5e0!3m2!1sen!2szm!4v1725117037037!5m2!1sen!2szm",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "St. John's Church",
    description: "A historic church with a rich heritage.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7327960709886!2d9.67048917412181!3d4.074758146767635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113ca2a7fb813%3A0x5a0eb56f2ca5578!2sParoisse%20Saint%20Louis%20de%20Bonaberi!5e0!3m2!1sen!2szm!4v1725117037037!5m2!1sen!2szm",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "St. John's Church",
    description: "A historic church with a rich heritage.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7327960709886!2d9.67048917412181!3d4.074758146767635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113ca2a7fb813%3A0x5a0eb56f2ca5578!2sParoisse%20Saint%20Louis%20de%20Bonaberi!5e0!3m2!1sen!2szm!4v1725117037037!5m2!1sen!2szm",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    name: "St. John's Church",
    description: "A historic church with a rich heritage.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7327960709886!2d9.67048917412181!3d4.074758146767635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113ca2a7fb813%3A0x5a0eb56f2ca5578!2sParoisse%20Saint%20Louis%20de%20Bonaberi!5e0!3m2!1sen!2szm!4v1725117037037!5m2!1sen!2szm",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    name: "St. John's Church",
    description: "A historic church with a rich heritage.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7327960709886!2d9.67048917412181!3d4.074758146767635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113ca2a7fb813%3A0x5a0eb56f2ca5578!2sParoisse%20Saint%20Louis%20de%20Bonaberi!5e0!3m2!1sen!2szm!4v1725117037037!5m2!1sen!2szm",
    image: "https://via.placeholder.com/300x200",
  },
  // Add more church objects here
];
//
export default function ChurchCarousel() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedChurch, setSelectedChurch] = useState(null);

  const openModal = (church: React.SetStateAction<null>) => {
    setSelectedChurch(church);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedChurch(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="relative">
        <Slider {...settings} className="carousel">
          {churches.map((church) => (
            <div key={church.id} className="p-4">
              <div
                className="bg-white rounded-lg shadow-lg cursor-pointer"
                onClick={() => openModal(church)}
              >
                <img
                  src={church.image}
                  alt={church.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-playfair text-[#2e3192]">
                    {church.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{church.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        {selectedChurch && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-playfair text-[#2e3192]">
              {selectedChurch.name}
            </h2>
            <p className="text-gray-600 mt-2">{selectedChurch.description}</p>
            <iframe
              width="100%"
              height="300"
              frameBorder="0"
              title="map"
              src={selectedChurch.location}
              className="mt-4"
            ></iframe>
          </Modal>
        )}
      </div>
    </div>
  );
}
