import LeadershipGrid from "./members/LeadershipGrid";
import MemberCountriesGrid from "./members/MemberCountriesGrid";
import CTASection from "./theSport/CTASection";

export default function Members() {
  return (
    <>
      <LeadershipGrid />
      <MemberCountriesGrid />
      <CTASection
        title="Ready to bring WMMF to your country?"
        description="Join a growing global federation committed to fair play, development, and the fastest format in football."
        buttonLabel="Apply for Membership"
        buttonHref="/contact?intent=membership"
      />
    </>
  );
}
