import React from 'react';
import styles from './TestimonialsSections.module.css';
const TestimonialsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Testimonials</p>
        <p className={styles.secondary}>
          These are some people that I have worked with...
        </p>
      </div>
      <div className={styles['bottom-content']}></div>
      {/* comment */}
    </div>
  );
};

export default TestimonialsSection;
