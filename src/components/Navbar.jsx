// import { useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const menuVariants = {
//         hidden: { opacity: 0, y: -20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//       };
//   return (
//     <nav className="bg-gray-900 text-white p-1 md:w-full md:p-1">
//     <div className="flex justify-between items-center">
//       {/* <h1 className="text-2xl font-bold">NOFA Digitals</h1> */}
//       <img className="rounded-full oultine-focus border-2 border-gray-400 shadow-2xl" src="src/assets/Screenshot (96).png" alt="" width={80} height={70}/>
//       <button
//         className="md:hidden focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d={
//                 isOpen
//                   ? "M6 18L18 6M6 6l12 12"
//                   : "M4 6h16M4 12h16M4 18h16"
//               }          />
//         </svg>
//       </button>
//       <div className="hidden md:flex space-x-4">
//           <a href="#" className="hover:text-gray-400">Home</a>
//           <a href="#services" className="hover:text-gray-400">Services</a>
//           <a href="#contact" className="hover:text-gray-400">Contact</a>
//         </div>
//     </div>


//     <motion.div
//         className="md:hidden flex justify-center items-center" 
//         initial="hidden"
//         animate={isOpen ? "visible" : "hidden"}
//         variants={menuVariants}
//       >
//         <div className="flex flex-col items-start space-y-2 mt-2">
//           <a href="#" className="block hover:text-gray-400">Home</a>
//           <a href="#services" className="block hover:text-gray-400">Services</a>
//           <a href="#contact" className="block hover:text-gray-400">Contact</a>
//         </div>
//       </motion.div>
//   </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Screenshot from "../assets/Screenshot (96).png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img
          src={Screenshot}
          alt="Nofa digitals studio"
          className="rounded-full"
          width={45}
          height={45}
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl transition-transform transform rotate-180 duration-300 ease-in-out" />
            ) : (
              <AiOutlineMenu className="text-2xl transition-transform transform rotate-0 duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-black transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          <AiOutlineClose />
        </button>
        <ul className="space-y-6 pt-20 px-6">
          <li>
            <a
              href="#"
              className="block text-lg text-white hover:text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-lg text-white hover:text-gray-400"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-lg text-white hover:text-gray-400"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-lg text-white hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
