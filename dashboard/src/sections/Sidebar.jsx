import { useState, useEffect } from "react";
import { MdDashboard, MdOutlineMessage, MdLogout } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

const navItems = [
  { name: "Dashboard", icon: MdDashboard },
  { name: "Analytics", icon: SiSimpleanalytics },
  { name: "Messages", icon: MdOutlineMessage },
  { name: "Settings", icon: IoSettingsSharp },
];

const Sidebar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      transition={{ duration: 0.4 }}
      className={`relative h-screen flex flex-col justify-between items-center 
        bg-gradient-to-b from-gray-900 via-gray-950 to-black
        shadow-xl gap-10 border-r border-gray-800
        ${isExpanded ? "py-8 px-6" : "px-4 py-6"}`}
    >
      {/* Logo + Nav Section */}
      <div className="flex flex-col justify-center items-center gap-8">
        {isExpanded ? (
          <div id="logo-box">
            <h1 className="text-teal-400 font-bold text-3xl tracking-wide">
              DEBUG <span className="italic text-gray-300">Entity</span>
            </h1>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-teal-400 font-bold text-3xl">D</h1>
            <span className="italic text-gray-300 text-3xl">E</span>
          </div>
        )}

        {/* Nav Items */}
        <div
          id="navLinks-box"
          className="flex flex-col justify-center items-start gap-5 w-full mt-5"
        >
          {navItems.map((item, index) => (
            <div
              key={item.name}
              onClick={() => setActiveNavIndex(index)}
              className={`flex items-center w-full cursor-pointer rounded-xl overflow-hidden transition-all duration-300 relative group
              ${
                activeNavIndex === index
                  ? "bg-teal-600/20 text-teal-400"
                  : "text-gray-300 hover:text-teal-300 hover:bg-gray-800/50"
              } 
              ${isExpanded ? "py-2 px-3" : "p-2"}`}
            >
              {/* Left Accent Line */}
              {activeNavIndex === index && (
                <span className="absolute left-0 top-0 w-[3px] h-full bg-teal-400 rounded-tr-md rounded-br-md shadow-[0_0_10px_#2dd4bf]"></span>
              )}

              <div
                className={`p-2 rounded-full flex justify-center items-center transition-all duration-300 
                ${
                  activeNavIndex === index
                    ? "bg-teal-500/30 text-teal-300"
                    : "text-gray-400 group-hover:text-teal-300"
                }`}
              >
                <item.icon className="md:w-6 w-4 h-4 md:h-6" />
              </div>

              <span
                className={`ml-4 text-lg font-medium ${
                  isExpanded ? "flex" : "hidden"
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <div
        id="expended-icon"
        className="absolute -right-3 bottom-28 bg-teal-500 text-black p-2 rounded-full cursor-pointer shadow-lg hover:bg-teal-400 transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowRight />
        </motion.div>
      </div>

      {/* Logout Section */}
      <Link
        to="/logout"
        id="logout-box"
        className="w-full flex flex-col justify-start items-center gap-4 mb-4"
      >
        <div className="bg-gray-700 w-full h-[0.5px]"></div>
        <div className="flex justify-center items-center gap-2 hover:text-teal-300 transition-all duration-300 cursor-pointer">
          <MdLogout className="text-gray-400 h-6 w-6" />
          <span
            className={
              "text-gray-300 text-lg " + (isExpanded ? "flex" : "hidden")
            }
          >
            Logout
          </span>
        </div>
      </Link>
    </motion.section>
  );
};

export default Sidebar;
