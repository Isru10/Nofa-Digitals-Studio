import React from 'react'
import family from "../assets/family.jpg";

const Reserve = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
      <div className="flex-1">
        <img
          src={family}
          alt="Photography Studio"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg mb-6">
          At NOFA Digitals, we pride ourselves on delivering exceptional photography and videography services. Our team of experts ensures every moment is captured perfectly.
        </p>
        {/* <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition duration-300"
        > */}

          <a
  href="tel:0987654321"
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition duration-300"
>
Book a Session

</a>

        {/* </a> */}
      </div>
    </div>
  </div>

  )
}

export default Reserve