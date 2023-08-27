import { motion } from "framer-motion";


const letterAnimation = {
  initial: { y: '100%' },
  animate: i => ({
    y: '0%',
    transition: {
      type: 'spring',
      ease: 'easeOut',
      duration: 1,
      delay: 0.028 * i,
    },
  }),
};

const wordAnimation = {
  initial: { y: '100%' },
  animate: i => ({
    y: '0%',
    transition: {
      type: 'spring',
      ease: 'easeOut',
      duration: 1,
      delay: 0.5 + i,
    },
  }),
};

const arqvestWord = {
  initial: { y: '100%' },
  animate: {
    y: '0%',
    transition: {
      type: 'spring',
      ease: 'easeOut',
      duration: 1,
      delay: 0,
    },
  }
}

const AnimatedLetters = ({ title, display="block", disabled }) => (
  <motion.span
    style={{ overflow: 'hidden', display: display }}
    >
    {[...title].map((letter, index) => (
      <motion.span
        variants={letterAnimation}
        custom={index}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ display: 'inline-block', overflow: "hidden", verticalAlign: "bottom", whiteSpace: "pre" }}
        key={index}
        >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const AnimateWords = ({ title, delay }) => (
  <motion.span
    style={{ overflow: 'hidden', display: "block" }}
    >
      <motion.span
        variants={wordAnimation}
        custom={delay}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ display: 'inline-block', overflow: "hidden", verticalAlign: "bottom", whiteSpace: "pre" }}
        >
        {title}
      </motion.span>
  </motion.span>
);

const AnimateAqrvestWord = ({ title }) => (
  <motion.span
    style={{ overflow: 'hidden', display: "inline-flex" }}
    >
      <motion.span
        variants={arqvestWord}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ display: 'inline-block', overflow: "hidden", verticalAlign: "bottom", whiteSpace: "pre" }}
        >
        {title}
      </motion.span>
  </motion.span>
);

export { AnimatedLetters, AnimateWords, AnimateAqrvestWord };