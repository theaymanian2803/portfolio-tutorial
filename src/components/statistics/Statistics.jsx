import React from "react";
import "./statistics.scss";
import { motion } from "framer-motion";
const statsvariation = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.3,
    },
  },
};
const childrenvariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
function Statistics() {
  return (
    <motion.div
      variants={statsvariation}
      initial="initial"
      whileInView="show"
      className="statistics">
      <motion.div variants={childrenvariants} className="numbers">
        <h3>80 +</h3>
        <h2>satisfied clients</h2>
      </motion.div>
      <div className="line" />
      <motion.div variants={childrenvariants} className="numbers">
        <h3>200 +</h3>
        <h2>project completed</h2>
      </motion.div>
      <div className="line" />

      <motion.div variants={childrenvariants} className="numbers">
        <h3>99+</h3>
        <h2>reviews given</h2>
      </motion.div>
    </motion.div>
  );
}

export default Statistics;
