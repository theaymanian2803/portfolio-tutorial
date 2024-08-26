import React, { useRef, useEffect } from "react";
import Button from "../button/Button";
import { motion, useInView } from "framer-motion";
import { MdContentPasteSearch } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";

import "./skills.scss";
function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    console.log("in view is", isInView);
  }, [isInView]);
  return (
    <div className="skills">
      <div className="skills-wrpper">
        <motion.div
          className="left"
          ref={ref}
          style={{
            scale: isInView ? 1.3 : 1,
            translateX: isInView ? "-80px" : "50px",
            transition: "1s",
          }}>
          <h1>
            why hire me for your next <span>project?</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            reprehenderit?
          </p>
        </motion.div>
        <div className="right">
          <div className="box box1 ">
            <IoDiamondOutline />

            <h2>visual design</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="box box2">
            <TbActivityHeartbeat />

            <h2> design prototype</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="box box3">
            <MdContentPasteSearch />

            <h2>visual design</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="hireBtn">
            <Button text="hire me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
