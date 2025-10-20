import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import ContentSection from "@/components/content";
import ZigZagDivider from "@/components/ui/border";
import TeamSection from "@/components/team";

export default function Home(){
  return(
    <>
    <section>
      <HeroSection/>
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <ContentSection/>
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <TeamSection />
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <FooterSection/>
    </section>
    </>
  )
}