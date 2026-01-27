import { HeroBlock } from "./_components/heroblock";
import { ArchitecureBlock } from "./_components/architecureblock";
import BuiltForLifetimeSection from "./_components/BuiltForLifetimeSection";
import WhatWeOfferSection from "./_components/WhatWeOfferSection";
import StoneValuesSection from "./_components/StoneValuesSection";
import TestimonialSection from "./_components/TestimonialSection";
import CollectionsSection from "./_components/CollectionsSection";
import Gallery from "./_components/gallery";
import './home.scss'

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <ArchitecureBlock />
      <BuiltForLifetimeSection />
      <WhatWeOfferSection />
      <StoneValuesSection />
      <Gallery />
      <CollectionsSection />
      <TestimonialSection /> 
    </>
  );
}