import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      


      const services = [
        {
          title: "Wedding Photoshoots",
          description: "Capture your special moments with elegance and creativity.",
          image: "./src/assets/dress.jpg",
        },
        {
          title: "Casual Photography",
          description: "Perfect shots for everyday moments and celebrations.",
          image: "./src/assets/photo-1662894312415-4ea3e988f63f.avif",
        },
        {
          title: "Video Editing",
          description: "Professional editing to make your videos unforgettable.",
          image: "./src/assets/casual.jpg",
        },
        {
          title: "Event Coverage",
          description: "Seamless coverage for events of all sizes.",
          image: "./src/assets/photo-1558794401-54d7fce8d534.avif",
        },
        {
          title: "Portrait Photography",
          description: "Stunning portraits to cherish forever.",
          image: "./src/assets/brides.jpg",
        },
      ];
    
    return (
      <div id="services" className="text-slate-300 bg-neutral-900 p-8 ">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say?</h2>
        <Slider {...settings}>
            
                      
        {services.map((service, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-6 shadow-lg rounded">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}


        </Slider>
      </div>
    );
  };
  
  export default Services;
  