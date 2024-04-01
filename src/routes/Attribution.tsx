import { motion } from "framer-motion";

const Attribution = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="flex-1 flex flex-col text-white max-container"
    >
        <h1 className="head-text">
          Artwork Attribution
        </h1>
        <div className="z-10 mt-12 overflow-y-auto overflow-x-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-3">
          <iframe title="space boi"   className="w-full shadow-white-glow" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f6a8c6a6727b4f2cb020c8b50bb2ee60/embed?autostart=1&ui_theme=dark" />
          <iframe title="[Extracted] Minecraft Java Edition's Stars" className="w-full shadow-white-glow" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c8868b7ffc4a473eb5cd9203a59e3650/embed?ui_theme=dark" />
          <iframe title="Stickman" className="w-full shadow-white-glow" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cd59f48ed6a7492da639efdc55f2c1f8/embed?ui_theme=dark" />
          <iframe title="Toy Robot Animated - Lowpoly" className="w-full shadow-white-glow" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6bc8f39aac354dfbbd374bb9ba5b4c24/embed?ui_theme=dark" />
          <iframe title="Triangular Animated Portal" className="w-full shadow-white-glow" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/58b8817efd7042d1adf9d2c595f120b1/embed?ui_theme=dark" />
        </div>
    </motion.section>
  )
}

export default Attribution