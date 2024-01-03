import React, { useState, useEffect } from 'react';

const TypingEffect = ({ strings, typeSpeed, backSpeed, loop, className}) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      // Implement backspacing effect
      timeout = setTimeout(() => {
        setText(strings[index].substring(0, text.length - 1));
      }, backSpeed);
    } else {
      // Implement typing effect
      timeout = setTimeout(() => {
        setText(strings[index].substring(0, text.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && text === strings[index]) {
      // Start deleting text after a delay
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      // Switch to next string or loop
      setIsDeleting(false);
      setIndex(loop ? (index + 1) % strings.length : index + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, strings, typeSpeed, backSpeed, loop]);

  return <span className={className}>{text}</span>;
};

export default TypingEffect;
