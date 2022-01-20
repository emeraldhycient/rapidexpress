import React from "react";
//import BIRDS from "vanta/dist/vanta.birds.min";
import "./styles.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import About from "./Home/About";
import Partners from "./Home/Partners";
import Testimony from "./Home/Testimony";
import Fab from "./Fab";
import Who from "./Home/Who";

function Index() {
  /* const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);*/

  return (
    <>
      <main>
        <Header />
        <Hero />
      </main>
      <Who/>
      <Services />
      <About />
      <Fab />
      <Partners />
      <Testimony />
      <Footer />
    </>
  );
}

export default Index;
