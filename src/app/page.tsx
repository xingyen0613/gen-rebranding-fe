import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import FeaturesSection from "@/components/FeaturesSection";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-hidden">
      <Header />
      <HeaderMobile />
      <main>
        <HeroSection />
        <ProductSection />
        <FeaturesSection />
        <BottomCTA />
      </main>
    </div>
  );
}
