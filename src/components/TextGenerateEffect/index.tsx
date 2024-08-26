'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

export const TextGenerateEffect = ({ words, filter = true, duration = 0.5 }: { words: string; filter?: boolean; duration?: number }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.p ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.p>
    );
  };

  return <div className="font-semibold text-lg text-justify">{renderWords()}</div>;
};
