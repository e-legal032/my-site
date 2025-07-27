import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoryPanel from "./StoryPanel";

function CaseCard({ data }) {
  const [expanded, setExpanded] = useState(false);

  const togglePanel = () => setExpanded(!expanded);

  return (
    <motion.div
      className="case-card"
      onClick={togglePanel}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={data.iconImg}
        alt={`Caso ${data.title}`}
        className="case-card-img"
      />
      <h3>{data.title}</h3>
      <p className="case-dilemma">{data.dilema}</p>
      <blockquote>“{data.quote}”</blockquote>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="story"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <StoryPanel data={data} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CaseCard;
