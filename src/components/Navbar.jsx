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




// components/Navbar.js
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">NOFA Digitals</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <a
                href="#"
                className="block text-lg text-white hover:text-gray-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-lg text-white hover:text-gray-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-lg text-white hover:text-gray-400"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-lg text-white hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
