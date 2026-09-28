"use client";

 
import SplitFeatureSection from "@/components/shared/SplitFeatureSectionicon";
import { Sparkles, ShieldCheck, TrendingUp, Zap, Users, Compass, Unlock } from "lucide-react";
 

export default function VisionMission() {
  return (
    <section style={{
      backgroundImage: "url('/images/investment/bg-pattern.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <SplitFeatureSection
        eyebrow="Our Vision"
        heading={
          <>
            To Shape a Future
            <br />
            Where <span className="text-accent-blue">Opportunity</span>
            <br />
            Creates Lasting <span className="text-accent-blue">Value</span>
          </>
        }
        paragraphs={[
          "To become a trusted investment and business consultancy in the UAE and wider GCC, recognized for connecting capital with promising opportunities, enabling strategic partnerships, and supporting businesses that contribute to sustainable economic growth",
        ]}
        image={{
          src: "/images/about/vision-ring.png",
          alt: "Abstract chrome ring representing connection",
          width: 500,
          height: 500,
        }}
        imagePosition="left"
        compactStats
        stats={[
          { icon: Sparkles, title: "Opportunities" },
          { icon: ShieldCheck, title: "Trust" },
          { icon: TrendingUp, title: "Growth" },
          { icon: Zap, title: "Impact" },
        ]}
      />

      <SplitFeatureSection
        eyebrow="Our Mission"
        heading={
          <>
            Turning Ambition Into
            <br />
            Structured Paths for
            <br />
            <span className="text-accent-blue">Growth.</span>
          </>
        }
        paragraphs={[
          "Our mission is to empower investors, entrepreneurs, and businesses with strategic insight, market intelligence, trusted connections, and end to end support that enable informed decisions and sustainable growth. We aim to simplify complex business journeys by bringing together the right strategy, expertise, partnerships, and execution under one trusted ecosystem",
        ]}
        image={{
          src: "/images/about/mission-target.png",
          alt: "Target and arrow representing precision and mission",
          width: 500,
          height: 500,
        }}
        imagePosition="right"
        compactStats
        stats={[
          { icon: Users, title: "Connect" },
          { icon: Compass, title: "Advise" },
          { icon: Unlock, title: "Enable" },
          { icon: TrendingUp, title: "Growth" },
        ]}
      />
    </section>
  );
}