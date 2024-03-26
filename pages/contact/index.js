//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

//emails
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ locale }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errorEs, setErrorEs] = useState("");
  const [successEs, setSuccessEs] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please insert your name");
      setErrorEs("Por favor ingresa tu nombre");
      return;
    }
    if (!email) {
      setError("Please insert your email");
      setErrorEs("Por favor ingresa tu email");
      return;
    }
    if (!subject) {
      setError("Please insert a subject");
      setErrorEs("Por favor ingresa un asunto");
      return;
    }
    if (!message) {
      setError("Please insert your message");
      setErrorEs("Por favor ingresa un mensaje");
      return;
    }

    const templateParams = {
      to_name: "Maria :)",
      user_name: name,
      subject: subject,
      message: message,
      user_email: email,
    };
    setError("");

    emailjs
      .send("service_hx9ciqj", "template_ew6avyc", templateParams, {
        publicKey: "PWRBcDI5IqH8ZP9G5",
      })
      .then((response) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setError("");
        setSuccess("I received your message!");
        setSuccessEs("Ya recibí tu mensaje!");
        setErrorEs("");
      });
  };

  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto flex h-full items-center justify-center py-32
      text-center xl:text-left"
      >
        {/* text & form */}
        <div className="flex w-full max-w-[700px] flex-col">
          {/* text */}
          {locale === "en" ? (
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-12 text-center"
            >
              Let&apos;s <span className="text-accent">connect.</span>
            </motion.h2>
          ) : (
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-12 text-center"
            >
              Vamos a <span className="text-accent">conectar.</span>
            </motion.h2>
          )}

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-6"
            onSubmit={send}
          >
            {/* input group */}
            <div className="flex w-full gap-x-6">
              <input
                type="text"
                placeholder={locale === "en" ? "Name" : "Nombre"}
                className="input"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <input
              type="text"
              placeholder={locale === "en" ? "Subject" : "Asunto"}
              className="input"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <textarea
              placeholder={locale === "en" ? "Message" : "Mensaje"}
              className="textarea"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            {locale === "en" ? (
              <span className="text-white/60">{error}</span>
            ) : (
              <span className="text-white/60">{errorEs}</span>
            )}
            <button
              className="btn group flex max-w-[170px] items-center
              justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all
              duration-300 hover:border-accent"
              type="submit"
            >
              {locale === "en" ? (
                <span
                  className="transition-all duration-500
                group-hover:-translate-y-[120%] group-hover:opacity-0"
                >
                  Let&apos;s talk
                </span>
              ) : (
                <span
                  className="transition-all duration-500
                group-hover:-translate-y-[120%] group-hover:opacity-0"
                >
                  Hablemos
                </span>
              )}

              <BsArrowRight
                className="absolute -translate-y-[120%] text-[22px] opacity-0
                transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
              />
            </button>
            {locale === "en" ? (
              <span className="text-white/60">{success}</span>
            ) : (
              <span className="text-white/60">{successEs}</span>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
