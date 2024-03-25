//next img
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//frame motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen bg-primary/60">
      {/* text */}
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className="container mx-auto flex h-full flex-col justify-center
        text-center xl:pt-20 xl:text-left"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-12 xl:max-w-xl"
          >
            I&apos;m a FullStack Web Developer but my true passion is the
            FrontEnd development.
            <br />
            My passion for art and technology are the perfect combination to
            make the app of your dreams come true.
          </motion.p>

          {/* btn */}
          <Link href={"/work"} className="hidden md:flex">
            <div className="relative flex justify-center xl:hidden">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </Link>
        </div>
      </div>
      {/* img */}
      <div className="absolute bottom-0 right-0 h-full w-[1200px]">
        {/* bg img */}
        <div
          className="absoute translate-z-0 h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion
        xl:bg-cover xl:bg-right xl:bg-no-repeat"
        ></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-32 h-full max-h-[578px] w-full max-w-[637px]
        lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
