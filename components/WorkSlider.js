// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//required modules swiper
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

//next img
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid cursor-pointer grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map(({ path, title }, index) => {
                return (
                  <div
                    key={index}
                    className="group relative flex items-center justify-center overflow-hidden rounded-lg"
                  >
                    <div className="group relative flex items-center justify-center overflow-hidden">
                      {/* image */}
                      <Image src={path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
                       to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80"
                      ></div>
                      {/* title */}
                      <div
                        className="absolute bottom-0 translate-y-full
                       transition-all duration-300 group-hover:-translate-y-14 group-hover:xl:-translate-y-24"
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>

                          {/* title part 2 */}
                          <div
                            className="translate-y-[500%] transition-all
                          delay-150 duration-300 group-hover:translate-y-0"
                          >
                            PROJECT
                          </div>

                          {/* icon */}
                          <div
                            className="translate-y-[500%] text-xl 
                          transition-all delay-200 duration-300 group-hover:translate-y-0"
                          >
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
