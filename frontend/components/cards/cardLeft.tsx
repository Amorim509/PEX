'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardBase from "./cardBase";

interface CardImageLeftProps {
  title: string;
  description?: string;
  image: string;
}

const CardImageLeft: React.FC<CardImageLeftProps> = ({ title, description, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <CardBase className="w-[70%] ml-0 mr-auto my-4">
        <div id="quem-somos" className="flex gap-4 items-center w-full">
          <img src={image} alt={title} className="w-[50%] h-auto object-cover rounded shadow-md" />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
            {description && description.split('\n').map((paragraph, idx) => (
              <p key={idx} className="text-base text-gray-600 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </CardBase>
    </motion.div>
  );
};

export default CardImageLeft;
