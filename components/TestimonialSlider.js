// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//required modules swiper
import { Pagination, Navigation } from "swiper";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//next img
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[450px] lg:max-w-[80vw]"
    >
      {testimonialData.map(({ message, name, position, image }, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex h-full flex-col items-center gap-x-8 px-16 md:flex-row">
              {/* avatar, name, position */}
              <div
                className="relative mx-auto flex w-full max-w-[300px]
              flex-col items-center xl:mx-0 xl:justify-center"
              >
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mx-auto mb-2">
                    <Image src={image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{name}</div>
                  {/* position */}
                  <div className="text-[12px] font-extralight uppercase tracking-widest">
                    {position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div
                className="relative flex flex-1 flex-col items-center justify-center
               before:w-[1px] xl:pl-20 xl:before:absolute xl:before:left-0 
              xl:before:h-[200px] xl:before:bg-white/20"
              >
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft
                    className="mx-auto text-2xl text-white/20 md:mx-0
                  xl:text-4xl"
                  />
                </div>
                {/* message */}
                <div className="text-center md:text-left xl:text-lg">
                  {message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
