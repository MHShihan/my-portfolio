import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

import Navbar from "./components/navbar/Navbar";
import ParticleConfig from "./components/particleConfig/ParticleConfig";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="bg-[#1f1f1f]">
      <Navbar />
      <main className="snap-mandatory snap-y text-white">
        <section className="snap-center">
          <h1>Hero</h1>
        </section>
        <section className="snap-center">About</section>
        <section className="snap-center">Project</section>
        <section className="snap-center">Contact</section>
      </main>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticleConfig}
      />
    </div>
  );
}

export default App;
