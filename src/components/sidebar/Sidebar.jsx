import React, { useState } from "react";
import "./sidebar.scss";
import { delay, motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./togglebutton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1500px at 50px 50px)",
    transition: {
      type: "spring",
      stifness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stifness: 700,
      damping: 30,
    },
  },
};
function Sidebar() {
  const [open, setIsOpen] = useState(false);
  return (
    <motion.div
      variants={variants}
      animate={open ? "open" : "closed"}
      className="sidebar">
      <motion.div className="bg">
        <Links />
      </motion.div>
      <ToggleButton setOpen={setIsOpen} />
    </motion.div>
  );
}

export default Sidebar;
