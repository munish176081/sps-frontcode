import { HeroBlock } from "./_components/heroblock";
import { ArchitecureBlock } from "./_components/architecureblock";
import BuiltForLifetimeSection from "./_components/BuiltForLifetimeSection";
import WhatWeOfferSection from "./_components/WhatWeOfferSection";
import StoneValuesSection from "./_components/StoneValuesSection";
import './home.scss'

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <ArchitecureBlock />
      <BuiltForLifetimeSection />
      <WhatWeOfferSection />
      <StoneValuesSection />
      
      {/* <Button label="About Us" href="/about" />  */}

    </>
  );
}