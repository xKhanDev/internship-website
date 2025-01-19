import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="bg-gray-900 py-16 px-2">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our <span className="text-blue-500">Interns</span> Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              "I was able to gain hands-on experience in a dynamic environment
              with the guidance of experienced professionals. The internship
              program at Internship Pakistan is truly a game-changer for anyone
              looking to start their career in tech."
            </p>
            <p className="text-gray-300 flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />- John Doe, Frontend
              Developer
            </p>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              "The internship program at Internship Pakistan exceeded all my
              expectations. The team was supportive, and the work was
              challenging yet rewarding. I would definitely recommend it to
              anyone looking to gain industry experience."
            </p>
            <p className="text-gray-300 flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />- Umer Khan, Backend
              Developer
            </p>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              "Internship Pakistan provided me with a platform to learn and
              grow. The internship opportunities were diverse and challenging
              but i never give up."
            </p>
            <p className="text-gray-300 flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />- Ali Raza, Full Stack
              Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
