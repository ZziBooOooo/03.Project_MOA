import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IconCard = ({ imagePath, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: 25 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ delay: delay }}
    >
      <Image
        src={imagePath}
        alt="icon"
        layout="responsive"
        width={200}
        height={200}
      />
    </motion.div>
  );
};

export default IconCard;
