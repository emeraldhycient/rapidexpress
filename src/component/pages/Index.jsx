import React from "react";
//import BIRDS from "vanta/dist/vanta.birds.min";
import "./styles.css";
import Header from "../common/Header";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import About from "./Home/About";
import Partners from "./Home/Partners";

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
      <Services />
      <About />
      <Partners />
    </>
  );
}

export default Index;
