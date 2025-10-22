import { useState, useEffect } from "react";
import { MdDashboard, MdOutlineMessage, MdLogout } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
      className={`h-screen flex flex-col justify-between items-center bg-gray-950 gap-10 
        ${isExpanded ? "py-8 px-6" : "px-8 py-6"}`}
    >
      {/* Logo Section */}
      <div className="flex flex-col justify-center items-center gap-8">
        {isExpanded ? (
          <div id="logo-box">
            <h1 className="text-red-600 font-bold text-3xl">
              DEBUG <span className="italic text-yellow-500">Entity</span>
            </h1>
          </div>
        // ) : (
        //   <div className="flex justify-center items-center">
        //     <h1 className="text-red-600 font-bold text-3xl">D</h1>
        //     <span className="italic text-yellow-500 text-3xl">E</span>
        //     <div>
            
        //     </div>
        //   </div>
        // )}

        <div
          id="navLinks-box"
          className="flex flex-col justify-center items-start gap-5 w-full mt-5"
        >
          {navItems.map((item, index) => (
            <div
              key={item.name}
              id="link-box"
              onClick={() => setActiveNavIndex(index)}
              className={`flex items-center w-full cursor-pointer rounded-xl overflow-hidden transition-all duration-300
              ${
                activeNavIndex === index
                  ? "bg-yellow-500 text-black"
                  : "text-white"
              } 
              ${isExpanded ? "py-2" : "p-2"}`}
            >
              <div
                className={`bg-yellow-300 text-black p-2 rounded-full flex justify-center items-center transition-all duration-300 
                ${activeNavIndex === index ? "ml-0" : "ml-2"}`}
              >
                <item.icon className="md:w-6 w-4 h-4 md:h-6" />
              </div>

              <span
                className={`ml-4 text-lg ${isExpanded ? "flex" : "hidden"}`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

          <div></div>

    </motion.section>
  );
};

export default Sidebar;
