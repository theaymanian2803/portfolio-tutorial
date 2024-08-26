import React from "react";
import { motion } from "framer-motion";

const itemLinks = ["About", "Skills", "Portfolio", "Testemonials"];
const itemVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const linksVariant = {
  open: {
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 50,
    opacity: 0,
  },
};
function Links() {
  return (
    <motion.div className="links" variants={itemVariants}>
      {itemLinks.map((link) => (
        <motion.a key={link} variants={linksVariant} href={`#${link}`}>
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
