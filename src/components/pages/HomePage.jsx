import CategorySection from "../CategorySection";
import HeroSection from "../HeroSection";
import JobSection from "../JobSection";
import SubcribtionSection from "../SubcribtionSection";

export default function HomePage() {
  return (
    <>
      <main className="mt-28 px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <HeroSection />

        <CategorySection />

        <JobSection />

        <SubcribtionSection />
      </main>
    </>
  );
}
