
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { differenceInHours } from "date-fns"; // Import the differenceInHours function from date-fns library
import { useState } from "react";
import axios from 'axios';


const Card = ({ campaign }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [isExpired, setIsExpired] = useState(false);


  const handleExpireCampaign = () => {
    setIsExpired(!isExpired); // Toggle the isExpired state

    // Send PUT request
  //  updateExpiredStatus(campaign.id,isExpired)
  };
  const updateExpiredStatus = async (id, expiredStatus) => {
    try {
      const response = await axios.put(`http://localhost:3000/campaigns/${id}/updateExpired`, { expired: expiredStatus });
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error updating expired status:', error);
      throw error;
    }
  };


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
        backgroundColor: isExpired ? "#E65038" : "#2d3748", // Set the background color to red-400 if the campaign has expired
      }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-gray-800 rounded-2xl shadow-2xl shadow-black w-[350px] py-4 my-4 mr-4 px-4"
    >
      <img className="h-[200px] w-[450px]" src={campaign.img} alt="" />
      <p className={`text-white py-2 font-bold text-xl ${isExpired ? 'line-through' : ''}`}>{campaign.title}</p>
      <p className="text-gray-300 py-1">{campaign.description}</p>
      <div className="flex">
        <p className="text-white py-1">
          <span className="text-purple-400">Qty: {campaign.qty} </span>
        </p>
        <p className="text-white py-1 ml-[20px]">
          <span className="text-green-400">Location: {campaign.loc} </span>
        </p>
      </div>
      <div className="flex">
        <p className="text-white py-1">
          <button class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] " onClick={handleExpireCampaign}>
  {isExpired ? "Unexpire" : "Expired"}
</button>
        </p>
      </div>
    </motion.div>
  );
};

export default Card;

