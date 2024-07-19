import Image from "next/image";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="">
     <Header />
     <IntroSection />
     <Footer />
    </main>
  );
}
