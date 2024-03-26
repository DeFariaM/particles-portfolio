//next img
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <Link href={"/work"} className="mx-auto max-w-fit xl:mx-0">
      <div className="relative flex h-[185px] w-[185px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat">
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="h-full max-h-[148px] w-full max-w-[141px] animate-spin-slow"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2" />
      </div>
    </Link>
  );
};

export default ProjectsBtn;
