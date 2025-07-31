import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoryPanel from "./StoryPanel";
import { LanguageContext } from "../../Shared/LanguageContext";
import { texts } from "../../Shared/texts";

function CaseCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  const { language } = useContext(LanguageContext);

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
        alt={`Caso ${texts[language][data.titleKey]}`}
        className="case-card-img"
      />
      <h3>{texts[language][data.titleKey]}</h3>
      <p className="case-dilemma">{texts[language][data.dilemaKey]}</p>
      <blockquote>“{texts[language][data.quoteKey]}”</blockquote>

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
