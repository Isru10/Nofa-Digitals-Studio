import dress from "../assets/dress.jpg";
import Habeshawit from "../assets/Habeshawit.avif";

// classic

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Text Content (Desktop) */}
        <div className="hidden lg:block lg:w-1/2 text-left space-y-6">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold">
            Nofa Digitals <span className="text-gray-300">Studio</span>
          </h2>
          <p className="text-lg text-gray-400">
            Crafting Memories, Frame by Frame
          </p>
          <a
            href="tel:0987654321"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md shadow-md transition duration-300 mt-6 inline-block"
          >
            Book a Session
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center relative">
          
          {/* Large Screen Image */}
          <div className="hidden lg:block w-[400px] h-auto overflow-hidden rounded-tl-[160px] rounded-full">
            <img
              src={dress}
              alt="Elegant Woman - Large Screen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile View */}
          <div className="block lg:hidden w-[80%] h-auto overflow-hidden text-center">
            <img
              src={Habeshawit}
              alt="Elegant Woman - Mobile"
              className="w-full h-auto object-cover rounded-tl-[100px] rounded-full"
            />
            
            {/* Mobile Text & Button */}
            <div className="mt-6">
              <h2 className="text-3xl font-bold">Nofa Digitals Studio</h2>
              <p className="text-gray-400">Crafting Memories, Frame by Frame</p>
              <a
                href="tel:0987654321"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 mt-4 inline-block rounded-md transition duration-300"
              >
                Book a Session
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;









// original 




// import dress from "../assets/dress.jpg";
// import Habeshawit from "../assets/Habeshawit.avif";

// // classic


// // components/HeroSection.js
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative bg-black text-white h-screen overflow-hidden">
//       {/* Header */}
     
//       {/* Hero Content DONT FOGRET YOU CHANGED HERE */}
//       <div className=" flex flex-col-reverse lg:flex-row items-center lg:h-full max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Text Content */}
//         <div className="hidden lg:block lg:w-1/2 text-center lg:text-left">
//           <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
//             Nofa Digitals <span className="text-gray-300">Studio</span>
//           </h2>
        
//           <p className="text-lg mb-8 text-gray-400">
//           Crafting Memories, Frame by Frame
//           </p>
//           {/* <button className="px-8 py-4 bg-white text-black text-sm uppercase tracking-wide rounded-md shadow-lg hover:bg-gray-100 ">
//             Make your reservation
//           </button> */}





// <button className="px-8 py-4 bg-white text-black text-sm uppercase tracking-wide rounded-md shadow-lg hover:bg-gray-100 ">
            
            
// <a
//   href="tel:0987654321"
//   className="inline-block bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition duration-300"
// >
//   Call Us Now
// </a>

//           </button>
//         </div>

//         {/* Decorative Image */}
//         <div className="lg:w-1/2 flex justify-center items-center lg:justify-end relative m-0">
//           {/* Large Screen Image */}
//           <div className="hidden lg:block w-[400px] h-auto overflow-hidden rounded-tl-[160px] rounded-full">
//             <img
//               src={dress}
//               alt="Elegant Woman - Large Screen"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Mobile Screen Image */}
//           <div className=" pt-8 mt-12 block lg:hidden w-[80%] h-auto overflow-hidden relative" width="50%" height="50%"  >
//           <img
//               src={Habeshawit}
//               alt="Elegant Woman - Mobile"
//               className="mt-44 h-full w-full object-cover rounded-tl-[100px] rounded-full"
//             />


// <div className="m-8">
 

//   <h2 className="text-4xl font-bold infotext">  Nofa Digitals Studio  </h2>
//   <span className="text-gray-400">Crafting Memories, Frame by Frame</span>

// </div>

// <div className="m-4 flex justify-center items-center">

// <a
//   href="tel:0987654321"
//   className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition duration-300"
// >
// Book a Session

// </a>

// </div>

          
//           </div>



//           <div className="">


//           </div>


          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;










