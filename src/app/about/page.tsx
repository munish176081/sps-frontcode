import PageHeader from '@/components/ui/PageHeader';
import { IntroSection } from './_components/introSection';
import { InspirationSection } from './_components/inspirationSection';
import { QuoteSection } from './_components/quoteSection';
import { SustainabilitySection } from './_components/sustainabilitySection';
import './style.scss';

export default function About() {
  return (
    <>
      <PageHeader
        title="Our Story"
      /> 
      <IntroSection />
      <InspirationSection />
      <QuoteSection />
      <SustainabilitySection />
    </>
  );
}