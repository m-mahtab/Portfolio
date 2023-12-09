import React, { useState, useEffect } from 'react';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { IoClose } from "react-icons/io5";



function Modal({ onClose, imageList, selectedImage }) {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const [currentslide, setCurrentslide] = useState(0);

    const handleSlideChange = (direction, currentslide) => {
        if (direction === 'right' && currentslide < imageList.length - 1) {
            setCurrentslide(currentslide + 1);
        } else if (direction === 'left' && currentslide > 0) {

            setCurrentslide(currentslide - 1);
        }
    };

    useEffect(() => {
        if (imageList && imageList.length > 0) {
            // const initialSlide = imageList.indexOf(selectedImage);
            setCurrentslide(selectedImage >= 0 ? selectedImage : 0);

        }
    }, [imageList, selectedImage]);

    return (
        <div>
            <div className=' fixed flex top-0 left-0 w-full h-full bg-black bg-opacity-75  items-center justify-center '
            >
                {/* <div className='cursor-pointer text-5xl font-light' currentslide={currentslide} onClick={() => handleSlideChange('left')}>
                        <TiChevronLeft />
                    </div> */}
                <button className='cursor-pointer text-white absolute top-2 right-2 ' onClick={onClose}>
                    <IoClose className='text-2xl'/>


                </button>
                <div className='modal'>
                    {imageList.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image.src}
                                className='w-screen sm:w-auto sm:h-screen'
                                alt={`${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
                {/* <div className='cursor-pointer text-5xl absolute' onClick={() => handleSlideChange('right')}>
                        <TiChevronRight />
                    </div> */}

            </div>
        </div>
    );

}

// Images component
function Images({ imageList }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null); // Clear selected image when closing modal
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        openModal();
    };

    return (
        <div>
            <div className='mx-11'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5' >
                    {imageList.map((image, index) => (
                        <div key={index} data-aos="fade-up " className='img-hover-zoom  img-hover-zoom--brightness' >
                            <img
                                src={image.src}
                                className=' w-auto transition-all duration-100 rounded-lg cursor-pointer filter grayscale hover:grayscale-0'
                                alt={` ${index + 1}`}
                                onClick={() => handleImageClick(image)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && <Modal  onClose={closeModal} imageList={[selectedImage]} />}
        </div>
    );

}

export default Images;