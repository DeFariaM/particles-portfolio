//next img
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -bottom-12 -left-36 z-10 w-[200px] rotate-12 animate-pulse mix-blend-color-dodge duration-75 xl:w-[260px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="h-full w-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
