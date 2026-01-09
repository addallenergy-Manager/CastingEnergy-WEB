import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { ModelsGrid } from "../components/ModelsGrid";
import { Services } from "../components/Services";
import { BecomeModel } from "../components/BecomeModel";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Page() {
  return (
    <main className="min-h-screen bg-white antialiased selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <AboutUs />
      <ModelsGrid />
      <Services />
      <BecomeModel />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}