import { motion } from 'framer-motion';

const TextGenerateEffect = ({ words, filter = true, duration = 0.5 }: { words: string; filter?: boolean; duration?: number }) => {
  const wordsArray = words.split(' ');

  const childEffect = {
    hidden: {
      opacity: 0,
      filter: filter ? 'blur(10px)' : 'none',
    },
    visible: {
      opacity: 1,
      filter: filter ? 'blur(0px)' : 'none',
      transition: {
        duration: duration,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.p
      initial="hidden"
      animate="visible"
      className="font-semibold text-lg text-justify"
      transition={{ staggerChildren: 0.2, delayChildren: 1.2 }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} variants={childEffect}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TextGenerateEffect;
