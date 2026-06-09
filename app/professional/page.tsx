import ProHeader from "./components/ProHeader";
import ProAbout from "./components/ProAbout";
import ProSkills from "./components/ProSkills";
import ProExperience from "./components/ProExperience";
import ProProjects from "./components/ProProjects";
import ProEducation from "./components/ProEducation";
import ProCertifications from "./components/ProCertifications";
import ProContact from "./components/ProContact";
import ModeSwitch from "../components/ModeSwitch";

export default function ProfessionalPage() {
  return (
    <main className="relative min-h-screen">
      <ModeSwitch to="terminal" />
      <ProHeader />
      <ProAbout />
      <ProSkills />
      <ProExperience />
      <ProProjects />
      <ProEducation />
      <ProCertifications />
      <ProContact />
    </main>
  );
}
