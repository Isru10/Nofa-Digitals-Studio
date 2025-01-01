
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
        <div className="lg:w-1/2 flex justify-center items-center lg:justify-end relative mt-4">
          {/* Large Screen Image */}
          <div className="hidden lg:block w-[400px] h-auto overflow-hidden rounded-tl-[160px] rounded-full">
            <img
              src="./src/assets/dress.jpg"
              alt="Elegant Woman - Large Screen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Screen Image */}
          <div className=" pt-8 mt-12 block lg:hidden w-[80%] h-auto overflow-hidden rounded-tl-[100px] rounded-full relative" width="50%" height="50%"  >
            <img
              src="./src/assets/Habeshawit.avif"
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




