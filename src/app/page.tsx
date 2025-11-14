import { UpskillHero } from '@/components/UpskillHero';
import { BootcampOverview } from '@/components/BootcampOverview';
import { UpskillKeyHighlights } from '@/components/UpskillKeyHighlights';
import { CourseBreakdown } from '@/components/CourseBreakdown';
import { UpskillSkills } from '@/components/UpskillSkills';
import { RealWorldProjects } from '@/components/RealWorldProjects';
import { WhyUpskillCertification } from '@/components/WhyUpskillCertification';
import { UpskillTestimonials } from '@/components/UpskillTestimonials';
import { PricingPlans } from '@/components/PricingPlans';
import { WhyUpskillDXB } from '@/components/WhyUpskillDXB';
import { UpskillCTA } from '@/components/UpskillCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <UpskillHero />
      <BootcampOverview />
      <UpskillKeyHighlights />
      <CourseBreakdown />
      <UpskillSkills />
      <RealWorldProjects />
      <WhyUpskillCertification />
      <UpskillTestimonials />
      <PricingPlans />
      <WhyUpskillDXB />
      <UpskillCTA />
    </div>
  );
}
