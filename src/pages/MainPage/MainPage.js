import React from 'react';
import MainSection from '../../components/Main/MainSection';
import InfoSection from '../../components/Information/InfoSection';
import ContactSection from '../../components/Contact/ContactSection';
import TestimonialsSection from '../../components/Testimonials/TestimonialsSection';
const MainPage = () => {
  return (
    <div>
      <MainSection />
      <InfoSection />
      {/* <ContactSection />
      <TestimonialsSection /> */}
    </div>
  );
};

export default MainPage;
