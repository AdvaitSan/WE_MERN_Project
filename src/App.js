import React from 'react';
import CampaignList from './components/CampaignList';
import "./App.css"
import Search from './components/Search';


// const CampaignsList = ({ campaigns, wallet }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {campaigns.map((campaign, index) =>
//         campaign["userCampaigns"].map((campaign) => (
//           <Cards key={index} campaign={campaign} wallet={wallet} />
//         ))
//       )}
//     </div>
//   );
// };

const App = () => {
  return (
    <>
      <div className='home__Container'>
        <div className='home__bgLayer'>

          <p className='flex text-transparent bg-clip-text pt-[4%] body-font font-poppins font-bold text-[180px] justify-center bg-gradient-to-t from-green-100 via-green-500 to-green-400'>FoodVerse</p>
          <p className='flex text-transparent bg-clip-text italic mt-[-12px] text-[40px] justify-center bg-gradient-to-t from-green-100 via-green-500 to-green-400'>Connecting Surplus to Sustain Hope</p>
          <div className='flex mt-[50px] justify-center'>
            <a href='/create'><button
              class="relative px-8 py-2 mr-8 text-white rounded-2xl text-2xl bg-black isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Donate Now
            </button>
            </a>
            <a href='#list'><button
              class="relative px-8 py-2 text-white rounded-2xl text-2xl bg-black isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >Campaigns
            </button>
            </a>
            
          </div>
          <i className='flex justify-center text-lg mt-4 text-white'>A DODS Venture</i>
        </div>
      </div>
      
      <div className=' bg-gradient-to-b from-green-200 via-green-400 to-green-700'>
      <div className="custom-shape-divider-top-1701551187">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        <Search/>
      </div>

    </>
  );
};

export default App;
