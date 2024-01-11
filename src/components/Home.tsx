import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FooterSection from "./FooterSection";
import FourthSection from "./FourthSection";
import JournalSection from "./JournalSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import LastSection from "./LastSection";

export default function Home() {
  return (
    <div className="bg-primaryB3">
      <div className="ml-10 mr-12">
        <FirstSection />

        <SecondSection />

        <ThirdSection />

        <FourthSection />

        <FifthSection />

        <JournalSection />

        <FooterSection />

        <LastSection />
      </div>
    </div>
  );
}
