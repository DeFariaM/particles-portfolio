//links
import Link from "next/link";

//icons
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link
        href={"https://github.com/DeFariaM"}
        target="blank_"
        className="transition-all duration-300 hover:text-accent"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mariadefaria/"}
        target="blank_"
        className="transition-all duration-300 hover:text-accent"
      >
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
