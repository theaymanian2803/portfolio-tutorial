import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Button from "../button/Button";
import { motion } from "framer-motion";
import "./hero.scss";

const rightVariant = {
  hidden: { x: -300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const leftVariant = {
  hidden: { x: 300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <motion.div
          variants={leftVariant}
          initial="hidden"
          animate="show"
          className="left">
          <h2>welcome</h2>
          <h1>
            i'm <span>creative designer</span> experienced
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto</p>
          <div className="btns">
            <Button text="contact us" />
            <button>view portfolio </button>
            <FaArrowTrendUp />
          </div>
        </motion.div>

        <motion.div
          variants={rightVariant}
          initial="hidden"
          animate="show"
          className="right">
          <div className="box" />
          <div className="border" />
          <div className="img-wrapper">
            <img src="/a.jpg" alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
