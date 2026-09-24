import React from 'react';
import EchoGPTHero from './src/landingpage/hero/hero';
import AIModels from './src/landingpage/aimodels/aimodels';
import WhyChoose from './src/landingpage/whychoseus/whychoseus';
import PricingSection from './src/landingpage/pricing/pricing';
import FAQSection from './src/landingpage/faq/faq';
import TestimonialSection from './src/landingpage/testimonal/testimonal';
import Features from './src/landingpage/featuerspage/featuerpage';
import ProductPreview from './src/landingpage/productpreview/productpreview';


const page = () => {
  return (
    <div>
     <EchoGPTHero></EchoGPTHero>
     <Features></Features>
     <AIModels></AIModels>
     <ProductPreview></ProductPreview>
     <WhyChoose></WhyChoose>
     <PricingSection></PricingSection>
     <FAQSection></FAQSection>
     <TestimonialSection></TestimonialSection>
     </div>
  );
};

export default page;