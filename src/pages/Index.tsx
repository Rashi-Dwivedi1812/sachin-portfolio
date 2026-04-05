import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import GlobalBackground from "@/components/Globalbackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GlobalBackground>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <LiveDemoSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      </GlobalBackground>
    </div>
  );
};

export default Index;
