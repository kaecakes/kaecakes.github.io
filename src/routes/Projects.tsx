import { motion } from "framer-motion";
import Construction from "../components/Construction";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="flex-1 flex flex-col text-white max-container"
    >
        <h1 className="head-text">
          Projects
        </h1>
        <Construction />
    </motion.section>
  )
}

export default Projects