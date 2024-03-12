import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/style.css";

// Importing course images from online sources
import selfPaced from "../data/images/selfpaced.jpg";
import mentorLed from "../data/images/mentor-led.jpg";
import Advanced from "../data/images/advanced.webp";

const coursesList = [
  {
    id: 1,
    title: "Self Paced Courses",
    description:
      "Self-paced courses are designed to be completed at your own pace, at any time that is convenient for you. You can work through the course material at your own speed, and you can complete the course in as little or as much time as you need.",
    image: selfPaced,
    link: "/courses/self-paced",
    price: 3000, // Add the price for Self Paced Courses
  },
  {
    id: 2,
    title: "Mentor Led Courses",
    description:
      "Mentor-led courses are designed to provide you with a more structured learning experience. You will have access to a mentor who will guide you through the course material and provide you with feedback and support.",
    image: mentorLed,
    link: "/courses",
    price: 5000, // Add the price for Mentor Led Courses
  },
  {
    id: 3,
    title: "Advanced Courses",
    price: 8000,
    description:
      "Advanced courses are designed to provide you with a more in-depth understanding of a particular topic. These courses are typically more challenging and require a higher level of knowledge and experience.",
    image: Advanced,
    link: "/courses",
  },
];

const FeesStructure = () => {
  const handleDivClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className=" bg-[#2e3267] items-center flex flex-col cursor-pointer ">
      <div className="heading h-[10%] flex items-center justify-center p-20">
        <span className="max-text-2xl mb-2 text-3xl md:text-4xl font-extrabold text-white">
          Fee Structure
        </span>
      </div>
      <div className="flex h-[85%] flex-col lg:flex-row justify-between gap-5 px-5 mb-5">
        {coursesList.map((course) => (
          <div
            key={course.id}
            className="flex bg-gray-900 hover:bg-gray-950 hover:shadow shadow-lg p-5 md:mb-0 flex-col rounded-lg shadow-lg overflow-hidden"
            onClick={() => handleDivClick(course.link)}
          >
            <div className="max-w-sm rounded-lg">
              <img
                className="rounded-t-lg max-h-[210px]"
                src={course.image}
                alt={course.title}
              />
              <div className="flex justify-between items-center p-4 bg-gray-800">
                <span className="text-white text-lg font-bold">
                  ${course.price}
                </span>
                <Link
                  to={course.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                  Read More
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
              <h5 className="m-2 text-2xl font-bold text-gray-900 text-white">
                {course.title}
              </h5>
              <div className="p-5 h-[35%]">
                <p className="text-gray-400 text-justify">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesStructure;
