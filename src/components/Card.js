
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({campaign }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
    transition={{ duration: 1 , delay:0.5 }}
    className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black  w-[350px] py-4 my-4 mr-4 px-4'>
     <img className=' h-[200px] w-[450px]' src={campaign.img} alt="" />
     <p className=' text-white py-2 font-bold text-xl'>{campaign.title}</p>
     <p className=' text-gray-300 py-1'>{campaign.description}</p>
     <div className=' flex'>
     <p className=' text-white py-1'> <span className=' text-purple-400'>Qty: </span></p>
     </div>
     <div className=' flex'>
     <p className=' text-white py-1'><span className=' text-purple-400'>Expiry Date:</span> June 4, 2023</p>
     </div>
     <a href="/Hello" className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Donate</a>
    </motion.div>
  );
};

export default Card;
