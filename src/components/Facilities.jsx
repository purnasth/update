import React from "react";

const Facilities = () => {
  const hotelFacilities = [
    {
      id: 1,
      title: "Rooms & Suites",
      description:
        "Unwind in our elegantly decorated rooms that are equipped with all the modern day amenities.",
      icon: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
      router: "/rooms",
    },
    {
      id: 2,
      title: "Restro & Bar",
      description:
        "Perfect place to indulge in the finest wines and signature cocktails with friends and family.",
      icon: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      router: "/restaurants",
    },
    {
      id: 3,
      title: "Swimming Pool",
      description:
        "Have a wonderful time in our refreshing pool with your family and friends.",
      icon: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      router: "/pool",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-28">
      {hotelFacilities.map(({ id, title, description, icon, router }) => (
        <div key={id} className="relative overflow-hidden group">
          <img
            src={icon}
            alt={title}
            className="w-full h-screen shadow-md transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
          />
          <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] w-full h-full"></div>
          <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
            <div className="p-4">
              <h3 className="text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                {title}
              </h3>
              <p className="text-ivory my-4">{description}</p>
              <a
                href={router}
                className="text-ivory bg-transparent border border-solid border-white px-4 py-2 mt-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
