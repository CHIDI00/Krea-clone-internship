// components/HoverCard.jsx
import {
  Image as ImageIcon,
  Video as VideoIcon,
  Zap,
  RefreshCcw,
  Box,
  Pencil,
  Sparkles,
  Edit,
  Scissors,
  Files,
  Folder,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

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
      className=" p-6 pt-16 bg-white rounded-2xl
 border-2 border-gray-200 grid grid-cols-3 gap-6 w-[60%] card-sh"
      onMouseLeave={() => {
        setIsHoveringHome(false);
      }}
    >
      <div>
        <h3 className="mb-3 font-semibold text-gray-500">Generate</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white shadow-sm rounded-xl bg-gradient-to-b from-slate-500 via-gray-400 to-white">
              <ImageIcon size={18} />
            </div>
            <span className="text-sm font-medium">Image</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-orange-500 shadow-sm rounded-xl">
              <VideoIcon size={18} />
            </div>
            <span className="text-sm">Video</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-blue-500 shadow-sm rounded-xl">
              <Zap size={18} />
            </div>
            <span className="text-sm">Realtime</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-black shadow-sm rounded-xl">
              <RefreshCcw size={18} />
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
            <div className="flex items-center justify-center p-3 text-white bg-yellow-500 shadow-sm rounded-xl">
              <Sparkles size={18} />
            </div>
            <span className="text-sm">Enhancer</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-purple-500 shadow-sm rounded-xl">
              <Pencil size={18} />
            </div>
            <span className="text-sm">Edit</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-teal-500 shadow-sm rounded-xl">
              <Edit size={18} />
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
              <Database size={18} />
            </div>
            <span className="text-sm">Train</span>
          </li>
          <li className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-50">
            <div className="flex items-center justify-center p-3 text-white bg-blue-800 shadow-sm rounded-xl">
              <Folder size={18} />
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
      {/* </div> */}
    </motion.div>
  );
};

export default HoverCard;
