import { motion } from 'framer-motion';

// Define the interface for the component's props
interface TextGenerateEffectProps {
  words: string;
  filter?: boolean;
  duration?: number;
}

/**
 * TextGenerateEffect - A React component that animates the appearance of a given text string,
 * generating a word-by-word animation effect using the Framer Motion library.
 *
 * @param {string} words - The full text that will be split and animated word by word.
 * @param {boolean} [filter=true] - Optional. If true, adds a blur effect to the words as they appear. Defaults to true.
 * @param {number} [duration=0.5] - Optional. The duration of the animation for each word. Defaults to 0.5 seconds.
 *
 * @returns {JSX.Element} A Framer Motion powered animated paragraph where each word animates into view.
 */

const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({ words, filter = true, duration = 0.5 }) => {
  // Splitting the words into an array to animate each word separately
  const wordsArray = words.split(' ');

  /**
   * childEffect - The animation configuration for each word.
   *
   * @property {Object} hidden - Defines the initial hidden state of each word.
   * @property {number} hidden.opacity - The opacity starts at 0 (completely invisible).
   * @property {string} hidden.filter - Optionally applies a blur effect (10px) if the filter prop is true.
   *
   * @property {Object} visible - Defines the visible state of each word.
   * @property {number} visible.opacity - The opacity animates to 1 (fully visible).
   * @property {string} visible.filter - The blur effect animates to 0px, making the word sharp.
   * @property {Object} visible.transition - Sets the animation timing and easing.
   * @property {number} visible.transition.duration - The duration of the animation (configurable via prop).
   * @property {string} visible.transition.ease - Easing function for the transition.
   */
  const childEffect = {
    hidden: {
      opacity: 0,
      filter: filter ? 'blur(10px)' : 'none'
    },
    visible: {
      opacity: 1,
      filter: filter ? 'blur(0px)' : 'none',
      transition: {
        duration: duration,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.p
      // The initial and animate states for the paragraph container
      initial="hidden"
      animate="visible"
      className="font-semibold text-lg text-justify"
      // The transition defines how the animation of child elements (words) is staggered
      transition={{ staggerChildren: 0.2, delayChildren: 1.2 }}
    >
      {wordsArray.map((word, idx) => (
        // Each word is wrapped in a motion.span to animate it individually
        <motion.span key={word + idx} variants={childEffect}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TextGenerateEffect;
