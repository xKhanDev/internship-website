import React from "react";

const ContactUs = () => {
  return (
    <div className="p-8 w-full flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-lg text-gray-200">
        Have a question or want to get in touch? We'd love to hear from you.
      </p>
      <form className="w-full flex flex-col gap-4 lg:w-1/2">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border-2 rounded-md"
        />
        <textarea
          placeholder="Message"
          className="p-2 border-2 rounded-md h-32"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 w-40 mx-auto rounded-full font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
