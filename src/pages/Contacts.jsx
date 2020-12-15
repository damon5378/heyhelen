import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const Contacts = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contacts</h1>
    </motion.div>
  );
};
