import FloatingHearts from "@/components/FloatingHearts";
import IntroScreen from "@/components/IntroScreen";
import BirthdayWish from "@/components/BirthdayWish";
import PhotoGallery from "@/components/PhotoGallery";
import OurStory from "@/components/OurStory";
import EmotionalPause from "@/components/EmotionalPause";
import ClosingLetter from "@/components/ClosingLetter";

const Index = () => {
  return (
    <main className="relative">
      <FloatingHearts />
      <IntroScreen />
      <BirthdayWish />
      <PhotoGallery />
      <OurStory />
      <EmotionalPause />
      <ClosingLetter />
    </main>
  );
};

export default Index;
