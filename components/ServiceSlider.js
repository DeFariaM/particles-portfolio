// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const esData = [
  /*  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, */
  {
    icon: <RxDesktop />,
    title: "Desarrollo",
    description: "Desarrollo FullStack, con frameworks de JavaScript.",
  },
  {
    icon: <RxPencil2 />,
    title: "Diseño",
    description: "Mockups de como se va a ver tu aplicación web con figma.",
  },
  /*  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, */
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Para mejorar la visualización de tu app web.",
  },
];
const enData = [
  /*  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, */
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Fullstack development with JavaScript frameworks.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Mockups design of how your web app will look like with Figma.",
  },
  /*  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, */
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "To improve the visualization of your web app.",
  },
];

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//required modules swiper
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = ({ locale }) => {
  const toMap = locale === "en" ? enData : esData;

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {toMap &&
        toMap.map(({ icon, title, description }, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="group flex h-max cursor-pointer gap-x-6 rounded-lg bg-[rgba(65,47,123,0.1)] 
            px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,0.1)] sm:flex-col sm:gap-x-0"
              >
                {/* icon */}
                <div className="mb-4 text-4xl text-accent">{icon}</div>
                {/* title & description */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{title}</div>
                  <p className="max-w-[350px] leading-normal">{description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ServiceSlider;
