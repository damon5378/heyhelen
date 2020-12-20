import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleStyle layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="qa_line"></div>
    </ToggleStyle>
  );
};

const ToggleStyle = styled(motion.div)`
  h4 {
    outline: none;
  }
`;
