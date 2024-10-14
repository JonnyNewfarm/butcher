import Container from "./components/Container";
import HeroSection from "./components/home/HeroSection";

export default async function Home() {
  return (
    <Container>
      <div className="justify-center flex">
        <HeroSection />
      </div>
    </Container>
  );
}
