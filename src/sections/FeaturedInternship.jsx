import React from "react";

const FeaturedInternship = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Featured Internship
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="mb-4">
              Gain hands-on experience in a dynamic environment with our
              exciting internship program. Collaborate with industry experts and
              enhance your skills.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <p className="mb-4">
              Gain hands-on experience in a dynamic environment with our
              exciting internship program. Collaborate with industry experts and
              enhance your skills.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">App Development</h3>
            <p className="mb-4">
              Join a team of innovative professionals and work on real-world
              projects. Elevate your career with our comprehensive internship
              program.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInternship;
