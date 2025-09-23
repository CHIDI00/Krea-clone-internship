import { motion } from "framer-motion";

import { BsPersonArmsUp, BsImage } from "react-icons/bs";
import { TiVideo } from "react-icons/ti";
import { ImMagicWand } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import { PiCompassTool, PiMicrophoneStageFill } from "react-icons/pi";
import { Button } from "@/app/_components/ui/button";
import { GiBrain } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";

const GenerateSection = () => {
  const tools = [
    {
      icon: BsImage,
      title: "Image",
      description: "Generate images with custom styles in Flux and Ideogram.",
      isNew: true,
      color: "tool-image",
      bgColor: "bg-gradient-to-b from-slate-500 via-gray-400 to-white",
    },
    {
      icon: TiVideo,
      title: "Video",
      description: "Generate videos with Haiku, Pika, Runway, Luma, and more.",
      isNew: false,
      color: "tool-video",
      bgColor: "bg-yellow-500",
    },
    {
      icon: IoPencil,
      title: "Realtime",
      description:
        "Real-time AI rendering on a canvas. Instant feedback loops.",
      isNew: false,
      color: "tool-realtime",
      bgColor: "bg-gradient-to-b from-blue-500 via-blue-400 to-white",
    },
    {
      icon: ImMagicWand,
      title: "Enhancer",
      description: "Upscale and enhance images and videos up to 2.5K.",
      isNew: true,
      color: "tool-enhance",
      bgColor: "bg-gradient-to-b from-black via-black/90 to-black/40",
    },
    {
      icon: PiCompassTool,
      title: "Edit",
      description:
        "Add objects, change style, or expand photos and generations.",
      isNew: true,
      color: "tool-edit",
      bgColor: "bg-gradient-to-b from-purple-900 via-purple-800 to-purple-400",
    },
    {
      icon: PiMicrophoneStageFill,
      title: "Video Lipsync",
      description: "Lip sync any video to any audio.",
      isNew: true,
      color: "tool-video",
      bgColor: "bg-gradient-to-b from-green-900 via-green-800 to-green-400",
    },
    {
      icon: BsPersonArmsUp,
      title: "Motion Transfer",
      description: "Transfer motion to images and animate characters.",
      isNew: true,
      color: "tool-enhance",
      bgColor: "bg-black",
    },

    {
      icon: GiBrain,
      title: "Train",
      description:
        "Teach Krea to replicate your style, products, or characters.",
      isNew: false,
      color: "tool-train",
      bgColor: "bg-blue-900",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-2 pt-20 md:py-20 md:px-6"
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold text-foreground"
        >
          Generate
        </motion.h2>
        <motion.button
          variants={itemVariants}
          className="flex items-center justify-center gap-1 text-sm font-medium text-blue-700 transition-colors text-primary hover:text-primary/80"
        >
          <BiChevronDown size={25} />
          Show all
        </motion.button>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {tools.map((tool) => (
          <motion.div key={tool.title} variants={itemVariants}>
            <div className="relative overflow-hidden transition-all duration-300 cursor-pointer group ">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between p-0 py-4 lg:p-4 md:gap-2 md:justify-center">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-3 rounded-2xl ${tool.bgColor} group-hover:scale-110 transition-transform duration-300 text-white`}
                    >
                      <tool.icon
                        className="w-8 h-8"
                        style={{ color: `hsl(var(--${tool.color}))` }}
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold text-[.9rem] text-foreground">
                          {tool.title}
                        </h3>
                        {tool.isNew && (
                          <div className="px-2 py-1 text-xs text-white bg-blue-600 rounded-full text-primary border-primary/20">
                            New
                          </div>
                        )}
                      </div>
                      <p className="mb-4 text-[.8rem] font-medium leading-tight text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-black transition-all duration-300 bg-gray-100 rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                    >
                      Open
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default GenerateSection;
