import React from "react";
import AboutSection from "../components/AboutSection";
import { QASection } from "../components/QASection";
import { ScrollTop } from "../components/ScrollTop";
import { TriggersSection } from "../components/TriggersSection";

const AboutMe = () => {
  return (
    <>
      <AboutSection />
      <TriggersSection />
      <QASection />
      <ScrollTop />
    </>
  );
};

export default AboutMe;
