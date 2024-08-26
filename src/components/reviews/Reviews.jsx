import React, { useRef } from "react";
import "./reviews.scss";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "300px",
  });
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1], ["0px", "80px"]);
  return (
    <div className="reviews">
      <div className="top">
        <motion.h1
          ref={ref}
          style={{
            translateY: inView ? x : "0px",
            transition: "1s",
          }}>
          customers reviews
        </motion.h1>
      </div>
      <div className="bottom">
        <div className="container-reviews">
          <div className="review">
            <div className="stars">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit dolorum quas culpa commodi modi aliquam, ab repellat
              mollitia quos accusamus.
            </p>
            <div className="username">
              <p>John Doe</p>
              <h3>ux designer</h3>
            </div>
          </div>
          <div className="review">
            <div className="stars">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit dolorum quas culpa commodi modi aliquam, ab repellat
              mollitia quos accusamus.
            </p>
            <div className="username">
              <p>John Doe</p>
              <h3>ux designer</h3>
            </div>
          </div>
          <div className="review">
            <div className="stars">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit dolorum quas culpa commodi modi aliquam, ab repellat
              mollitia quos accusamus.
            </p>
            <div className="username">
              <p>John Doe</p>
              <h3>ux designer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
