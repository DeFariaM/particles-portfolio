//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto flex h-full items-center justify-center py-32
      text-center xl:text-left"
      >
        {/* text & form */}
        <div className="flex w-full max-w-[700px] flex-col">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12 text-center"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-6"
          >
            {/* input group */}
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button
              className="btn group flex max-w-[170px] items-center
            justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all
            duration-300 hover:border-accent"
            >
              <span
                className="transition-all duration-500
              group-hover:-translate-y-[120%] group-hover:opacity-0"
              >
                Let's talk
              </span>
              <BsArrowRight
                className="absolute -translate-y-[120%] text-[22px] opacity-0
              transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
