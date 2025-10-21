import React, { use, useEffect } from "react";
import { MdDashboard, MdOutlineMessage, MdLogout } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
  expanded: { width: "20%" },
  nonExpended: { width: "5%" },
};

const navItems = [
  {
    name: "Dashboard",
    icon: MdDashboard,
  },
  {
    name: "Analytics",
    icon: SiSimpleanalytics,
  },

  {
    name: "Messages",
    icon: MdOutlineMessage,
  },

  {
    name: "Settings",
    icon: IoSettingsSharp,
  },
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, []);





  return (
    <div>
      <h1>side bar</h1>
    </div>
  );
};

export default Sidebar;
