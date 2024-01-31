import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./CC.css";
const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState('');
  const [img, setImg] = useState('');
  const [loc, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      qty,
      loc,
      img,
    };

    console.log('Data to be sent:', data);

    axios.post('http://localhost:3000/campaigns', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('New campaign created:', response.data);
        alert('Campaign created successfully!');
        // Optionally update state or trigger a refresh of the campaign list
      })
      .catch((error) => {
        console.error('Error creating campaign:', error);
        // Handle error, show error message, etc.
      });
  }

  return (
    <div  id="bod">
      <Navbar />
      <div id="parent" className='h-screen'>
        <div id="form" className=" mt-9 max-w-md mx-20 relative overflow-hidden bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="name">Location</label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="Location"
                value={loc}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="loc">Restaurant</label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="email">Image</label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="Image Link"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="email">Net Quantity</label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="number"
                placeholder="Quantity in Kg"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="bio">Description</label>
              <textarea
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                rows="3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-end">
            
              <button type="submit" className="text-white bg-indigo-600 hover:bg-indigo-500 hover:text-whiterounded-md rounded-lg px-4 py-1">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;

  