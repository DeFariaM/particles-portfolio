//next img
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "./Socials";

const Header = ({ locale }) => {
  return (
    <header
      className="absolute z-30 flex w-full items-center px-16 xl:h-[90px] xl:px-0
    "
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between py-6 lg:flex-row">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={300}
              height={30}
              alt=""
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials locale={locale} />
        </div>
      </div>
    </header>
  );
};

export default Header;
