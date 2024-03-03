import React, { useState, useEffect } from 'react';
import Card from './Card';
const CampaignList = () => {
  
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns from backend when component mounts
    fetch('http://localhost:5000/campaigns')
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <div id="list">
      <h1 className='flex justify-center body-font font-poppins text-7xl font-semibold '>CAMPAIGNS</h1>
      <ul className="grid grid-cols-3 px-[250px] gradient_color gap-x-32 py-20 ml-[-60px]">
        {campaigns.map((campaign) => (
           <Card key={campaign.key} campaign={campaign}/>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
