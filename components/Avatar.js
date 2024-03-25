//next img
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/astro.png"}
        width={637}
        height={578}
        alt=""
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};

export default Avatar;
