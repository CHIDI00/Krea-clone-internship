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
        <h3 className="text-gray-500 font-semibold mb-3">Generate</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-slate-500 shadow-sm text-white">
              <ImageIcon size={18} />
            </div>
            <span className="text-sm font-medium">Image</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-orange-500 shadow-sm text-white">
              <VideoIcon size={18} />
            </div>
            <span className="text-sm">Video</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-blue-500 shadow-sm text-white">
              <Zap size={18} />
            </div>
            <span className="text-sm">Realtime</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-black shadow-sm text-white">
              <RefreshCcw size={18} />
            </div>
            <span className="text-sm">Motion Transfer</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-gray-700 shadow-sm text-white">
              <Box size={18} />
            </div>
            <span className="text-sm">3D Objects</span>
          </li>
        </ul>
      </div>

      {/* Edit Column */}
      <div>
        <h3 className="text-gray-500 font-semibold mb-3">Edit</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-yellow-500 shadow-sm text-white">
              <Sparkles size={18} />
            </div>
            <span className="text-sm">Enhancer</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-purple-500 shadow-sm text-white">
              <Pencil size={18} />
            </div>
            <span className="text-sm">Edit</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-teal-500 shadow-sm text-white">
              <Edit size={18} />
            </div>
            <span className="text-sm">Video Lipsync</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-red-500 shadow-sm text-white">
              <Scissors size={18} />
            </div>
            <span className="text-sm">Video Restyle</span>
          </li>
        </ul>
      </div>

      {/* Assets Column */}
      <div>
        <h3 className="text-gray-500 font-semibold mb-3">Assets</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-orange-800 shadow-sm text-white">
              <Database size={18} />
            </div>
            <span className="text-sm">Train</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-blue-800 shadow-sm text-white">
              <Folder size={18} />
            </div>
            <span className="text-sm">Assets</span>
          </li>
          <li className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 flex items-center justify-center rounded-xl bg-green-500 shadow-sm text-white">
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
