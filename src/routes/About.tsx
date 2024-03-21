import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="flex-1 flex flex-col text-white max-container"
    >
        <h1 className="head-text">
          About me
        </h1>
        <p className="w-full flex flex-col gap-7 mt-14">
          Coming soon...
        </p>
    </motion.section>
  )
}

export default About;
