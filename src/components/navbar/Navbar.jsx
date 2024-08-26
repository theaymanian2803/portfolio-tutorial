import React from "react";
import "./navbar.scss";
import { motion, MotionConfig } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const navigation = ["About", "Skills", "Portfolio", "Testemonials"];
function Navbar() {
  return (
    <MotionConfig
      transition={{
        duration: 0.1,
        type: "spring",
        damping: 20,
      }}>
      <div className="navbar">
        <motion.h1
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileHover={{ scale: 1.2 }}
          animate={{ opacity: 1, x: 0 }}>
          Agency Web
        </motion.h1>

        <div className="hide">
          <Sidebar />
        </div>
        <motion.ul
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={{ opacity: 1, y: 0 }}>
          {navigation.map((i) => (
            <li key={i}>
              <a href={`#${i}`}>{i}</a>
            </li>
          ))}
        </motion.ul>
        <motion.button
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{ opacity: 1, x: 0 }}>
          download cv
        </motion.button>
      </div>
    </MotionConfig>
  );
}

export default Navbar;
