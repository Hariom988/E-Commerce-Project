import React, { useState } from "react";
import ClockIcon from "../src/assets/contact/clock-icon.svg";
import logo from "../src/assets/logo.svg";
import arrow from "../src/assets/shop-page/right-arrow.svg";
import MapIcon from "../src/assets/contact/map-pin-icon.svg";
import CallIcon from "../src/assets/contact/voice-call-icon.svg";
import { Link } from "react-router-dom";
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full">
      {/* Hero Section with Breadcrumb */}
      <div
        id="banner"
        className="flex flex-col  items-center justify-center bg-[url('../src/assets/shop-page/shop-banner.png')] bg-cover bg-center bg-no-repeat w-full min-h-[30vh] sm:min-h-[40vh] relative before:absolute before:inset-0 before:bg-black/10"
      >
        <div id="logo" className="w-10">
          <img src={logo} className="w-full" alt="" />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            <p>Contact</p>
          </h1>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-700 text-sm sm:text-base">
            <Link to={"/"}>Home</Link>
            <img className="w-2 opacity-60" src={arrow} alt="arrow" />
            <Link to={""} className="font-medium text-[#B88E2F]">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20    ">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
          {/* Left Side - Contact Information */}
          <div className="space-y-8 md:space-y-10">
            {/* Address */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <img src={MapIcon} className="w-6 h-6 text-gray-800" alt="" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  Address
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  236 5th SE Avenue, New
                  <br />
                  York NY10000, United
                  <br />
                  States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <img src={CallIcon} className="w-6 h-6 text-gray-800" alt="" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  Phone
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <img src={ClockIcon} className="w-6 h-6 text-gray-800" alt="" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  Working Time
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-gray-800 mb-3"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                           text-sm md:text-base placeholder-gray-400"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-gray-800 mb-3"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                           text-sm md:text-base placeholder-gray-400"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm md:text-base font-medium text-gray-800 mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="This is an optional"
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                           text-sm md:text-base placeholder-gray-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-gray-800 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi! I'd like to ask about"
                  rows={4}
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                           text-sm md:text-base placeholder-gray-400 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 md:px-12 py-3 md:py-4 bg-yellow-600 
                         hover:bg-yellow-700 hover:cursor-pointer text-white font-medium rounded-lg 
                         transition-colors duration-200 text-sm md:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
