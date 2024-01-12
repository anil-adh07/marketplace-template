import AboutUs from "./AboutUs";
import Herosection from "./Herosection";
import EssentialSection from "./EssentailSection";
import JournalSection from "./JournalSection";
import Introduction from "./Introduction";
import ImageSection from "./ImageSection";

export default function Home() {
  return (
    <>
      <Herosection />

      <Introduction />

      <ImageSection />

      <EssentialSection />

      <AboutUs />

      <JournalSection />
    </>
  );
}
