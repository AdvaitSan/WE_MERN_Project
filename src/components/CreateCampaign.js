import React, { useState } from 'react';
import Navbar from './Navbar';

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setqty] = useState('');
  const [img, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post new campaign to backend

    fetch('http://localhost:3000/campaigns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, qty, img }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('New campaign created:', data);
        alert('Campaign created successfully!'); // Show alert when object is successfully created
        // Optionally update state or trigger a refresh of the campaign list
      })
      .catch((error) => console.error('Error creating campaign:', error));
    };

    return (
      <div className='bg-[#86efac]'>
       <Navbar/>
      <div id="parent" className='bg-[#86efac] h-screen'>
        <div id="form" className=" mt-9 max-w-md mx-auto relative overflow-hidden bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" for="name"
                >Restaurant</label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text" 
                placeholder="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" for="email"
                >Image</label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="Image Link"
                value={img}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300" for="email"
        >Net Quantity</label>
<input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
          type="number"
          placeholder="Quantity in Kg"
          value={qty}
          onChange={(e) => setqty(e.target.value)}
        />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300" for="bio"
        >Description</label
      >
      <textarea
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        rows="3"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>

    <div className="flex justify-end">
      <a href="/">
      <button
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      > submit
      </button>
      </a>
    </div>
  </form>
</div>
</div>
</div>
  );
}

export default CreateCampaign;
