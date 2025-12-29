//import { JoinTeam } from "@/components/team/join-team";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
//import { TeamHero } from "@/components/team/team-hero";
//import { TeamGrid } from "@/components/team/team-grid";
import { TeamShowcase } from "@/components/team/TeamShowcase";

// Metadata for SEO
export const metadata = {
  title: "Our Team",
  description:
    "Meet the founders, leaders, and experts behind PSPM Technologies.",
  keywords: ["PSPM Team", "Founders", "Technical Team"],
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Header />
      
      
      <TeamShowcase/>
      <Footer />
      
    </main>
  );
}

