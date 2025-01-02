
// const Hero = () => {
//   return (
//     <div className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: 'url("./src/assets/photo-1662894312415-4ea3e988f63f.avif")' }}>
//       <h1 className="text-5xl font-bold text-[#148346] mb-4">Capture Your Moments with NOFA Digitals</h1>
//       <p className="text-lg mb-8 font-2xl text-[#31a880] ">Wedding Photoshoots | Casual Photography | Video Editing</p>
//       <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-400">Explore More</button>



//     </div>

    
//   );
// };
// export default Hero;









// const Hero = () => {
//   return (
//     <div id="hero" className="flex flex-col md:flex-row items-center justify-center p-8 md:space-x-8 bg-gray-50">
//     <div className="flex-1">
//       <h1 className="text-5xl font-bold mb-4">Welcome to NOFA Digitals</h1>
//       <p className="text-lg text-gray-600 mb-4">Capturing your best moments with professionalism and creativity.</p>
//     </div>
//     <div className="flex-1 flex flex-col items-center space-y-4">
//       <img
//         src="./src/assets/Habeshawit.avif"
//         alt="Wedding Moment"
//         className="rounded shadow-lg w-full object-cover"
//       />
//       <img
//         src="./src/assets/Habeshawit.avif"
//         alt="Studio Photography"
//         className="rounded shadow-lg w-full object-cover"
//       />
//     </div>
//   </div>

//   );
// };
// export default Hero;




// const Hero = () => {
//   const carouselImages = [
//     "https://via.placeholder.com/1200x600?text=Wedding+Moments",
//     "https://via.placeholder.com/1200x600?text=Studio+Photography",
//     "https://via.placeholder.com/1200x600?text=Casual+Photography",
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div id="hero" className="relative h-screen">
//       <Slider {...settings}>
//         {carouselImages.map((image, index) => (
//           <div key={index} className="h-screen">
//             <div
//               className="h-full bg-cover bg-center flex items-center justify-center text-center"
//               style={{ backgroundImage: `url(${image})` }}
//             >
//               <div className="bg-black bg-opacity-50 text-white p-8 rounded">
//                 <h1 className="text-5xl font-bold mb-4">Welcome to NOFA Digitals</h1>
//                 <p className="text-lg">Capturing your best moments with professionalism and creativity.</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
// export default Hero;








import dress from "../assets/dress.jpg";
import Habeshawit from "../assets/Habeshawit.avif";

// classic


// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white h-screen overflow-hidden">
      {/* Header */}
     
      {/* Hero Content */}
      <div className=" flex flex-col-reverse lg:flex-row items-center h-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Text Content */}
        <div className="hidden lg:block lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Nofa Digitals <span className="text-gray-300">Studio</span>
          </h2>
          <p className="text-lg mb-8 text-gray-400">
          Crafting Memories, Frame by Frame
          </p>
          {/* <button className="px-8 py-4 bg-white text-black text-sm uppercase tracking-wide rounded-md shadow-lg hover:bg-gray-100 ">
            Make your reservation
          </button> */}





<button className="px-8 py-4 bg-white text-black text-sm uppercase tracking-wide rounded-md shadow-lg hover:bg-gray-100 ">
            
            
<a
  href="tel:0987654321"
  className="inline-block bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition duration-300"
>
  Call Us Now
</a>

          </button>
        </div>

        {/* Decorative Image */}
        <div className="lg:w-1/2 flex justify-center items-center lg:justify-end relative m-0">
          {/* Large Screen Image */}
          <div className="hidden lg:block w-[400px] h-auto overflow-hidden rounded-tl-[160px] rounded-full">
            <img
              src={dress}
              alt="Elegant Woman - Large Screen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Screen Image */}
          <div className=" pt-8 mt-12 block lg:hidden w-[80%] h-auto overflow-hidden rounded-tl-[100px] rounded-full relative" width="50%" height="50%"  >
          <img
              src={Habeshawit}
              alt="Elegant Woman - Mobile"
              className="w-full h-full object-cover"
            />
<div className="m-4 flex justify-center items-center">

<a
  href="tel:0987654321"
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition duration-300"
>
Book a Session

</a>

</div>

          
          </div>



          <div className="">


          </div>


          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;











//  CLEARLY NOT RESPONISVE 




// const Hero = () => {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//         <div className="mr-auto place-self-center lg:col-span-7">
//             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
//             <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
//             <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
//                 Get started
//                 <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//             </a>
//             <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
//                 Speak to Sales
//             </a> 
//         </div>
//         <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
//             <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
//         </div>                
//     </div>
// </section>
//   )
// }

// export default Hero