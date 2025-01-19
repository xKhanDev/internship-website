import React, { useState } from "react";

const InternshipListing = () => {
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Software Engineer Intern",
      location: "Remote",
      category: "Software Engineering",
      duration: "3 months",
      type: "Paid",
    },
    {
      id: 2,
      title: "Data Science Intern",
      location: "Lahore",
      category: "Data Science",
      duration: "6 months",
      type: "Unpaid",
    },
    {
      id: 3,
      title: "UX Designer Intern",
      location: "Karachi",
      category: "UX Design",
      duration: "3 months",
      type: "Paid",
    },
    {
      id: 4,
      title: "DevOps Engineer Intern",
      location: "Islamabad",
      category: "DevOps Engineering",
      duration: "6 months",
      type: "Unpaid",
    },
    {
      id: 5,
      title: "Product Manager Intern",
      location: "Lahore",
      category: "Product Management",
      duration: "3 months",
      type: "Paid",
    },
    {
      id: 6,
      title: "Machine Learning Intern",
      location: "Karachi",
      category: "Machine Learning",
      duration: "6 months",
      type: "Unpaid",
    },
    {
      id: 7,
      title: "Frontend Developer Intern",
      location: "Islamabad",
      category: "Frontend Development",
      duration: "3 months",
      type: "Paid",
    },
    {
      id: 8,
      title: "Backend Developer Intern",
      location: "Lahore",
      category: "Backend Development",
      duration: "6 months",
      type: "Unpaid",
    },
  ]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filterInternships = () => {
    let filteredInternships = internships;
    if (searchTerm) {
      filteredInternships = filteredInternships.filter((internship) =>
        internship.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedLocation) {
      filteredInternships = filteredInternships.filter(
        (internship) => internship.location === selectedLocation
      );
    }
    if (selectedCategory) {
      filteredInternships = filteredInternships.filter(
        (internship) => internship.category === selectedCategory
      );
    }
    if (selectedDuration) {
      filteredInternships = filteredInternships.filter(
        (internship) => internship.duration === selectedDuration
      );
    }
    if (selectedType) {
      filteredInternships = filteredInternships.filter(
        (internship) => internship.type === selectedType
      );
    }
    setFilteredInternships(filteredInternships);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">Internship Listings</h1>
      <form className="bg-gray-600 p-4 rounded-l flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2">
          Search:
          <input
            type="text"
            className="p-1 bg-gray-200 text-black focus:outline rounded-md"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </label>
        <label className="flex items-center gap-2">
          Location:
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="p-1 bg-gray-200 text-black focus:outline rounded-md"
          >
            <option value="">All</option>
            <option value="Remote">Remote</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          Category:
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-1 bg-gray-200 text-black focus:outline rounded-md"
          >
            <option value="">All</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Science">Data Science</option>
            <option value="UX Design">UX Design</option>
            <option value="DevOps Engineering">DevOps Engineering</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          Duration:
          <select
            value={selectedDuration}
            onChange={handleDurationChange}
            className="p-1 bg-gray-200 text-black focus:outline rounded-md"
          >
            <option value="">All</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          Type:
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="p-1 bg-gray-200 text-black focus:outline rounded-md"
          >
            <option value="">All</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </label>
        <button
          type="button"
          onClick={filterInternships}
          className="p-4 bg-blue-500 hover:bg-blue-600 hover:text-white text-black focus:outline rounded-md"
        >
          Filter
        </button>
      </form>
      <ul className="w-full flex flex-wrap  justify-center items-center p-8 gap-4">
        {filteredInternships.map((internship) => (
          <div
            key={internship.id}
            className="w-full rounded-lg shadow p-4 bg-blue-500 text-black flex flex-col lg:w-[30%]"
          >
            <h2>{internship.title}</h2>
            <p>Location: {internship.location}</p>
            <p>Category: {internship.category}</p>
            <p>Duration: {internship.duration}</p>
            <p>Type: {internship.type}</p>
          </div>
        ))}
        {filteredInternships.length === 0 &&
          internships.map((internship) => (
            <div
              key={internship.id}
              className="w-full rounded-lg shadow p-4 bg-blue-500 text-black flex flex-col lg:w-[30%]"
            >
              <h2>{internship.title}</h2>
              <p>Location: {internship.location}</p>
              <p>Category: {internship.category}</p>
              <p>Duration: {internship.duration}</p>
              <p>Type: {internship.type}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default InternshipListing;
