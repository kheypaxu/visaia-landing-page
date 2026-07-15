import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhyVisaia from "@/components/WhyVisaia";
import PrecisionModules from "@/components/PrecisionModules";
import Workflow from "@/components/Workflow";
import WhoBenefits from "@/components/WhoBenefits";
import StartWithVisaia from "@/components/StartWithVisaia";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import DownloadSection from "@/components/DownloadSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <WhyVisaia />
      <PrecisionModules />
      <Workflow />
      <WhoBenefits />
      <StartWithVisaia />
      <Mission />
      <FAQ />
      <DownloadSection />
      <ContactForm />
      <Footer />
    </main>
  );
}