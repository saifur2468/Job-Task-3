import React from 'react';
import Hero from './src/landingpage/hero/hero';
import Features from './src/landingpage/featuerspage/featuerpage';
import AIModels from './src/landingpage/aimodels/aimodels';
import WhyChooseEcho from './src/landingpage/whychoseus/whychoseus';
import TestimonialSection from './src/landingpage/testimonal/testimonal';
import Pricing from './src/landingpage/pricing/pricing';
import FAQSection from './src/landingpage/faq/faq';
import ProductPreview from './src/landingpage/productpreview/productpreview';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <AIModels></AIModels>
      <ProductPreview></ProductPreview>
      <WhyChooseEcho></WhyChooseEcho>
      <Pricing></Pricing>
      <FAQSection></FAQSection>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default page;