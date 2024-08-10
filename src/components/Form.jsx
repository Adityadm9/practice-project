// src/Form.jsx
import React, { useEffect, useState } from "react";
import axios from 'axios';
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // useEffect(() => {
  //   fetch("http://localhost:3000/form")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch(() => {
  //       console.log("error");
  //     });
  // }, []);
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/form', formData);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  // const hh  = async (e) => {
  //   e.preventDefault();

  //   setFormData({
  //     name: "",
  //     email: "",
  //     number: "",
  //     subject: "",
  //   });

  //   console.log("Form submitted:", formData);
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-md shadow-sm"
      method="POST"
    >
      <h1 className="font-nunito font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 text-center my-5">
        Get in{" "}
        <span className="underline decoration-custom-yellow decoration-4 underline-offset-1">
          Touch
        </span>
      </h1>

      <div className="above  md:flex md:justify-evenly text-start ">
        <div className="mb-4">
          <label htmlFor="name" className="font-nunito text-gray-500 text-sm ">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className=" block  w-full rounded-md shadow-sm focus:outline-none border-b-2 border-gray-500 mx-auto "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="font-nunito text-gray-500 text-sm ">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" block w-full  rounded-md shadow-sm focus:outline-none border-b-2 border-gray-500 mx-auto "
          />
        </div>
      </div>
      <div className="below  md:flex md:justify-evenly text-start">
        <div className="mb-4">
          <label
            htmlFor="number"
            className="font-nunito text-gray-500 text-sm "
          >
            Number
          </label>
          <input
            required
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className=" block w-full  rounded-md shadow-sm focus:outline-none border-b-2 border-gray-500 mx-auto "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="font-nunito text-gray-500 text-sm "
          >
            Subject
          </label>
          <input
            required
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="block w-full  rounded-md shadow-sm focus:outline-none border-b-2 border-gray-500 mx-auto"
          />
        </div>
      </div>

      <div className="mb-4 flex justify-center mt-5 sm:m-10">
        <button
          type="submit"
          className="bg-yellow-400 text-white font-nunito font-bold text-sm sm:text-lg px-6 py-2 rounded-lg hover:scale-110"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
