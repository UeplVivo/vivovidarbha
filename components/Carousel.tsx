// "use client";

// import React, { useEffect, useRef, useState } from "react";

// interface Slide {
//   image: string;
//   heading: React.ReactNode;
//   subheading: React.ReactNode;
//   description: React.ReactNode;
// }

// const slides: Slide[] = [
//   {
//     image: "/assets/prod1.png",
//     heading: (
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-vivoRegular text-black">
//         V40 <span className="">🔹</span> V40 PRO
//       </h1>
//     ),
//     subheading: (
//       <p className="mt-4 text-md sm:text-lg font-vivoRegular text-gray-600">
//         Experience professional-grade photography
//       </p>
//     ),
//     description: (
//       <p className="mt-2 text-sm sm:text-lg font-vivoMedium text-[#a7a9ad]">
//         Multifocal Portrait | 5500mAh
//       </p>
//     ),
//   },
//   {
//     image: "/assets/prod2.png",
//     heading: (
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-vivoRegular text-black">
//         X60 <span className="">🔹</span> X60 PRO
//       </h1>
//     ),
//     subheading: (
//       <p className="mt-4 text-md sm:text-lg font-vivoRegular text-gray-600">
//         Capture the Night Like Never Before
//       </p>
//     ),
//     description: (
//       <p className="mt-2 text-sm sm:text-lg font-vivoMedium text-[#a7a9ad]">
//         Night Vision | 6000mAh
//       </p>
//     ),
//   },
//   // Add other slides here...
// ];

// export const HeroSection: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [hovering, setHovering] = useState(false);
//   const slideInterval = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (!hovering) {
//       slideInterval.current = setInterval(() => {
//         goToNextSlide();
//       }, 3000);
//     }

//     return () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };
//   }, [currentSlide, hovering]);

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const handleMouseEnter = () => {
//     setHovering(true);
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//     }
//   };

//   const handleMouseLeave = () => {
//     setHovering(false);
//   };

//   const current = slides[currentSlide];

//   return (
//     <section
//       className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ backgroundImage: `url('${current.image}')` }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
//       <div className="absolute inset-0 flex flex-col justify-center pl-8 sm:pl-16 md:pl-32">
//         {current.heading}
//         {current.subheading}
//         {current.description}
//         <button className="bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 w-[120px] sm:w-[171px] justify-between rounded-lg mt-4 hover:bg-blue-700 flex items-center">
//           Learn More
//           <div className="right-0">
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M14 3V3.75V3ZM15 3V2.25V3ZM21 9H21.75H21ZM21 15H20.25H21ZM15 21V21.75V21ZM14 21V20.25V21ZM20.9384 16.7822L21.6792 16.8995V16.8995L20.9384 16.7822ZM16.7822 20.9384L16.6648 20.1977L16.7822 20.9384ZM16.7822 3.06156L16.8995 2.32079L16.8995 2.32079L16.7822 3.06156ZM20.9384 7.21783L21.6792 7.1005V7.1005L20.9384 7.21783ZM10.5496 3.39996C10.2184 3.64873 10.1516 4.11888 10.4003 4.45007C10.6491 4.78126 11.1192 4.84808 11.4504 4.59931L10.5496 3.39996ZM11.4504 19.4007C11.1192 19.1519 10.6491 19.2187 10.4003 19.5499C10.1516 19.8811 10.2184 20.3513 10.5496 20.6L11.4504 19.4007ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75L3 11.25ZM16 12V11.25V12ZM12.534 15.4123C12.2095 15.6697 12.155 16.1414 12.4123 16.466C12.6697 16.7905 13.1414 16.845 13.466 16.5877L12.534 15.4123ZM14.763 14.6022L14.297 14.0145L14.763 14.6022ZM14.763 9.39785L14.297 9.98553L14.763 9.39785ZM13.466 7.41232C13.1414 7.15497 12.6697 7.20946 12.4123 7.53403C12.155 7.8586 12.2095 8.33034 12.534 8.58768L13.466 7.41232ZM16.9801 12.2507L17.7208 12.3687L17.7208 12.3687L16.9801 12.2507ZM16.9801 11.7493L17.7208 11.6313L17.7208 11.6313L16.9801 11.7493ZM14 3.75L15 3.75V2.25L14 2.25V3.75ZM20.25 9V15H21.75V9H20.25ZM15 20.25H14V21.75H15V20.25ZM20.25 15C20.25 15.9577 20.2477 16.3492 20.1977 16.6648L21.6792 16.8995C21.7523 16.4378 21.75 15.9003 21.75 15H20.25ZM15 21.75C15.9003 21.75 16.4378 21.7523 16.8995 21.6792L16.6648 20.1977C16.3492 20.2477 15.9577 20.25 15 20.25V21.75ZM20.1977 16.6648C19.9096 18.4834 18.4834 19.9096 16.6648 20.1977L16.8995 21.6792C19.3599 21.2895 21.2895 19.3599 21.6792 16.8995L20.1977 16.6648ZM15 3.75C15.9577 3.75 16.3492 3.75233 16.6648 3.80232L16.8995 2.32079C16.4378 2.24767 15.9003 2.25 15 2.25V3.75ZM21.75 9C21.75 8.09965 21.7523 7.56216 21.6792 7.1005L20.1977 7.33515C20.2477 7.65082 20.25 8.04233 20.25 9H21.75ZM16.6648 3.80232C18.4834 4.09035 19.9096 5.51661 20.1977 7.33515L21.6792 7.1005C21.2895 4.64012 19.3599 2.71048 16.8995 2.32079L16.6648 3.80232ZM14 2.25C12.7064 2.25 11.5106 2.67806 10.5496 3.39996L11.4504 4.59931C12.1607 4.06583 13.0424 3.75 14 3.75V2.25ZM14 20.25C13.0424 20.25 12.1607 19.9342 11.4504 19.4007L10.5496 20.6C11.5106 21.3219 12.7064 21.75 14 21.75V20.25ZM3 12.75L16 12.75V11.25L3 11.25L3 12.75ZM13.466 16.5877L15.2289 15.1898L14.297 14.0145L12.534 15.4123L13.466 16.5877ZM15.2289 8.81016L13.466 7.41232L12.534 8.58768L14.297 9.98553L15.2289 8.81016ZM15.2289 15.1898C15.9176 14.6438 16.4852 14.1953 16.8875 13.7945C17.2932 13.3904 17.6294 12.9418 17.7208 12.3687L16.2395 12.1327C16.2225 12.2388 16.1532 12.4087 15.8289 12.7318C15.5012 13.0582 15.0143 13.4457 14.297 14.0145L15.2289 15.1898ZM14.297 9.98553C15.0143 10.5543 15.5012 10.9418 15.8289 11.2682C16.1532 11.5913 16.2225 11.7612 16.2395 11.8673L17.7208 11.6313C17.6294 11.0582 17.2932 10.6096 16.8875 10.2055C16.4852 9.80475 15.9175 9.35616 15.2289 8.81016L14.297 9.98553ZM17.7208 12.3687C17.7402 12.2466 17.75 12.1234 17.75 12H16.25C16.25 12.0441 16.2465 12.0883 16.2395 12.1327L17.7208 12.3687ZM17.75 12C17.75 11.8766 17.7402 11.7534 17.7208 11.6313L16.2395 11.8673C16.2465 11.9117 16.25 11.9559 16.25 12H17.75ZM16 12.75H17V11.25H16V12.75Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//         </button>
//       </div>

//       {/* Navigation buttons */}
//       <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2">
//         <button
//           onClick={goToPrevSlide}
//           className="bg-blue-600 text-white h-10 sm:h-12 w-10 sm:w-12 rounded-full"
//         >
//           &larr;
//         </button>
//       </div>
//       <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
//         <button
//           onClick={goToNextSlide}
//           className="bg-blue-600 text-white h-10 sm:h-12 w-10 sm:w-12 rounded-full"
//         >
//           &rarr;
//         </button>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${
//               index === currentSlide ? "bg-blue-600" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable"; // Importing the swipeable hook

interface Slide {
  image: string;
  heading: React.ReactNode;
  subheading: React.ReactNode;
  description: React.ReactNode;
}

const slides: Slide[] = [
  {
    image: "/assets/prod1.png",
    heading: (
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-vivoRegular text-black">
        V40 <span className="">🔹</span> V40 PRO
      </h1>
    ),
    subheading: (
      <p className="mt-4 text-md sm:text-lg font-vivoRegular text-gray-600">
        Experience professional-grade photography
      </p>
    ),
    description: (
      <p className="mt-2 text-sm sm:text-lg font-vivoMedium text-[#a7a9ad]">
        Multifocal Portrait | 5500mAh
      </p>
    ),
  },
  {
    image: "/assets/prod2.png",
    heading: (
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-vivoRegular text-black">
        X60 <span className="">🔹</span> X60 PRO
      </h1>
    ),
    subheading: (
      <p className="mt-4 text-md sm:text-lg font-vivoRegular text-gray-600">
        Capture the Night Like Never Before
      </p>
    ),
    description: (
      <p className="mt-2 text-sm sm:text-lg font-vivoMedium text-[#a7a9ad]">
        Night Vision | 6000mAh
      </p>
    ),
  },
  {
    image: "/assets/prod1.png",
    heading: (
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-vivoRegular text-black">
        V40 <span className="">🔹</span> V40 PRO
      </h1>
    ),
    subheading: (
      <p className="mt-4 text-md sm:text-lg font-vivoRegular text-gray-600">
        Experience professional-grade photography
      </p>
    ),
    description: (
      <p className="mt-2 text-sm sm:text-lg font-vivoMedium text-[#a7a9ad]">
        Multifocal Portrait | 5500mAh
      </p>
    ),
  },
  {
    image: "/assets/prod2.png",
    heading: (
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-vivoRegular text-black">
        X60 <span className="">🔹</span> X60 PRO
      </h1>
    ),
    subheading: (
      <p className="mt-4 text-md sm:text-lg font-vivoRegular text-gray-600">
        Capture the Night Like Never Before
      </p>
    ),
    description: (
      <p className="mt-2 text-sm sm:text-lg font-vivoMedium text-[#a7a9ad]">
        Night Vision | 6000mAh
      </p>
    ),
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovering, setHovering] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!hovering) {
      slideInterval.current = setInterval(() => {
        goToNextSlide();
      }, 3000);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide, hovering]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setHovering(true);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  // Swipe Handlers using react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPrevSlide(),
    trackMouse: true,
  });

  const current = slides[currentSlide];

  return (
    <section
      {...swipeHandlers} // Applying swipe handlers
      className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: `url('${current.image}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center pl-8 sm:pl-16 md:pl-32">
        {current.heading}
        {current.subheading}
        {current.description}
        <button className="bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 w-[140px] sm:w-[171px] justify-between rounded-lg mt-4 hover:bg-blue-700 flex items-center">
          Learn More
          <div className="right-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http:www.w3.org/2000/svg"
            >
              <path
                d="M14 3V3.75V3ZM15 3V2.25V3ZM21 9H21.75H21ZM21 15H20.25H21ZM15 21V21.75V21ZM14 21V20.25V21ZM20.9384 16.7822L21.6792 16.8995V16.8995L20.9384 16.7822ZM16.7822 20.9384L16.6648 20.1977L16.7822 20.9384ZM16.7822 3.06156L16.8995 2.32079L16.8995 2.32079L16.7822 3.06156ZM20.9384 7.21783L21.6792 7.1005V7.1005L20.9384 7.21783ZM10.5496 3.39996C10.2184 3.64873 10.1516 4.11888 10.4003 4.45007C10.6491 4.78126 11.1192 4.84808 11.4504 4.59931L10.5496 3.39996ZM11.4504 19.4007C11.1192 19.1519 10.6491 19.2187 10.4003 19.5499C10.1516 19.8811 10.2184 20.3513 10.5496 20.6L11.4504 19.4007ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75L3 11.25ZM16 12V11.25V12ZM12.534 15.4123C12.2095 15.6697 12.155 16.1414 12.4123 16.466C12.6697 16.7905 13.1414 16.845 13.466 16.5877L12.534 15.4123ZM14.763 14.6022L14.297 14.0145L14.763 14.6022ZM14.763 9.39785L14.297 9.98553L14.763 9.39785ZM13.466 7.41232C13.1414 7.15497 12.6697 7.20946 12.4123 7.53403C12.155 7.8586 12.2095 8.33034 12.534 8.58768L13.466 7.41232ZM16.9801 12.2507L17.7208 12.3687L17.7208 12.3687L16.9801 12.2507ZM16.9801 11.7493L17.7208 11.6313L17.7208 11.6313L16.9801 11.7493ZM14 3.75L15 3.75V2.25L14 2.25V3.75ZM20.25 9V15H21.75V9H20.25ZM15 20.25H14V21.75H15V20.25ZM20.25 15C20.25 15.9577 20.2477 16.3492 20.1977 16.6648L21.6792 16.8995C21.7523 16.4378 21.75 15.9003 21.75 15H20.25ZM15 21.75C15.9003 21.75 16.4378 21.7523 16.8995 21.6792L16.6648 20.1977C16.3492 20.2477 15.9577 20.25 15 20.25V21.75ZM20.1977 16.6648C19.9096 18.4834 18.4834 19.9096 16.6648 20.1977L16.8995 21.6792C19.3599 21.2895 21.2895 19.3599 21.6792 16.8995L20.1977 16.6648ZM15 3.75C15.9577 3.75 16.3492 3.75233 16.6648 3.80232L16.8995 2.32079C16.4378 2.24767 15.9003 2.25 15 2.25V3.75ZM21.75 9C21.75 8.09965 21.7523 7.56216 21.6792 7.1005L20.1977 7.33515C20.2477 7.65082 20.25 8.04233 20.25 9H21.75ZM16.6648 3.80232C18.4834 4.09035 19.9096 5.51661 20.1977 7.33515L21.6792 7.1005C21.2895 4.64012 19.3599 2.71048 16.8995 2.32079L16.6648 3.80232ZM14 2.25C12.7064 2.25 11.5106 2.67806 10.5496 3.39996L11.4504 4.59931C12.1607 4.06583 13.0424 3.75 14 3.75V2.25ZM14 20.25C13.0424 20.25 12.1607 19.9342 11.4504 19.4007L10.5496 20.6C11.5106 21.3219 12.7064 21.75 14 21.75V20.25ZM3 12.75L16 12.75V11.25L3 11.25L3 12.75ZM13.466 16.5877L15.2289 15.1898L14.297 14.0145L12.534 15.4123L13.466 16.5877ZM15.2289 8.81016L13.466 7.41232L12.534 8.58768L14.297 9.98553L15.2289 8.81016ZM15.2289 15.1898C15.9176 14.6438 16.4852 14.1953 16.8875 13.7945C17.2932 13.3904 17.6294 12.9418 17.7208 12.3687L16.2395 12.1327C16.2225 12.2388 16.1532 12.4087 15.8289 12.7318C15.5012 13.0582 15.0143 13.4457 14.297 14.0145L15.2289 15.1898ZM14.297 9.98553C15.0143 10.5543 15.5012 10.9418 15.8289 11.2682C16.1532 11.5913 16.2225 11.7612 16.2395 11.8673L17.7208 11.6313C17.6294 11.0582 17.2932 10.6096 16.8875 10.2055C16.4852 9.80475 15.9175 9.35616 15.2289 8.81016L14.297 9.98553ZM17.7208 12.3687C17.7402 12.2466 17.75 12.1234 17.75 12H16.25C16.25 12.0441 16.2465 12.0883 16.2395 12.1327L17.7208 12.3687ZM17.75 12C17.75 11.8766 17.7402 11.7534 17.7208 11.6313L16.2395 11.8673C16.2465 11.9117 16.25 11.9559 16.25 12H17.75ZM16 12.75H17V11.25H16V12.75Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      </div>
      {/* Arrow Buttons for large screens */}
      <div className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={goToPrevSlide}
          className="bg-blue-600 text-white h-12 w-12 rounded-full"
        >
          &larr;
        </button>
      </div>
      <div className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={goToNextSlide}
          className="bg-blue-600 text-white h-12 w-12 rounded-full"
        >
          &rarr;
        </button>
      </div>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};
