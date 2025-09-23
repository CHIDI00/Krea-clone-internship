import { Box, Scissors, Files } from "lucide-react";
import { BsPersonArmsUp, BsImage } from "react-icons/bs";
import { TiVideo } from "react-icons/ti";
import { ImMagicWand } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import { PiCompassTool, PiMicrophoneStageFill } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FaFolder } from "react-icons/fa";

interface HoverProps {
  setIsHoveringHome: Dispatch<SetStateAction<boolean>>;
}

const HoverCard: React.FC<HoverProps> = ({ setIsHoveringHome }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 10 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className=" p-6 pt-16 bg-white dark:bg-[#181818]  rounded-2xl
 border-2 border-gray-200 dark:border-[#272727] grid grid-cols-3 gap-6 w-[60%] card-sh"
      onMouseLeave={() => {
        setIsHoveringHome(false);
      }}
    >
      <div>
        <h3 className="mb-3 font-semibold text-gray-500">Generate</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white shadow-sm rounded-xl bg-gradient-to-b from-slate-500 via-gray-400 to-white">
              <BsImage size={18} />
            </div>
            <span className="text-sm font-medium">Image</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-yellow-500 shadow-sm rounded-xl">
              <TiVideo size={18} />
            </div>
            <span className="text-sm">Video</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white shadow-sm bg-gradient-to-b from-blue-500 via-blue-400 to-white rounded-xl">
              <IoPencil size={18} />
            </div>
            <span className="text-sm">Realtime</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-black shadow-sm rounded-xl">
              <BsPersonArmsUp size={18} />
            </div>
            <span className="text-sm">Motion Transfer</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-gray-700 shadow-sm rounded-xl">
              <Box size={18} />
            </div>
            <span className="text-sm">3D Objects</span>
          </li>
        </ul>
      </div>

      {/* Edit Column */}
      <div>
        <h3 className="mb-3 font-semibold text-gray-500">Edit</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white shadow-sm bg-gradient-to-b from-black via-black/90 to-black/40 rounded-xl">
              <ImMagicWand size={18} />
            </div>
            <span className="text-sm">Enhancer</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white shadow-sm bg-gradient-to-b from-purple-900 via-purple-800 to-purple-400 rounded-xl">
              <PiCompassTool size={18} />
            </div>
            <span className="text-sm">Edit</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white shadow-sm bg-gradient-to-b from-green-900 via-green-800 to-green-400 rounded-xl">
              <PiMicrophoneStageFill size={18} />
            </div>
            <span className="text-sm">Video Lipsync</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-red-500 shadow-sm rounded-xl">
              <Scissors size={18} />
            </div>
            <span className="text-sm">Video Restyle</span>
          </li>
        </ul>
      </div>

      {/* Assets Column */}
      <div>
        <h3 className="mb-3 font-semibold text-gray-500">Assets</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-orange-800 shadow-sm rounded-xl">
              <GiBrain size={18} />
            </div>
            <span className="text-sm">Train</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-blue-800 shadow-sm rounded-xl">
              <FaFolder size={18} />
            </div>
            <span className="text-sm">Assets</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-green-500 shadow-sm rounded-xl">
              <Files size={18} />
            </div>
            <span className="text-sm">Gallery</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default HoverCard;
