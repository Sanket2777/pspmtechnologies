import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"
import { JoinTeam } from "@/components/team/join-team"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header/>
      <TeamHero />
      <TeamGrid />
      <JoinTeam />
      <Footer></Footer>
    </main>
  )
}
