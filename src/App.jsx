import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Search from "./components/Search";
// import PhysicsCategory from "./components/categories/physics/PhysicsCategory";
// import ChemistryCategory from "./components/categories/chemistry/ChemistryCategory";
// import MathematicsCategory from "./components/categories/mathematics/MathematicsCategory";
// import GeologyCategory from "./components/categories/geology/GeologyCategory";
// import ComputerScienceCategory from "./components/categories/computer-science/ComputerScienceCategory";

// Scientist Pages
import AdaLovelace from "./components/categories/physics/AdaLovelace";
import AlanTuring from "./components/categories/physics/AlanTuring";
import BarbaraMcClintock from "./components/categories/physics/BarbaraMcClintock";
import EnricoFermi from "./components/categories/physics/EnricoFermi";
import ErnestRutherford from "./components/categories/physics/ErnestRutherford";
import ErwinSchrödinger from "./components/categories/physics/ErwinSchrödinger";
import GertyCori from "./components/categories/physics/GertyCori";
import IsaacNewton from "./components/categories/physics/IsaacNewton";
import JamesClerkMaxwell from "./components/categories/physics/JamesClerkMaxwell";
import JocelynBellBurnell from "./components/categories/physics/JocelynBellBurnell";
import JohnBardeen from "./components/categories/physics/JohnBardeen";
import JRobertOppenheimer from "./components/categories/physics/JRobertOppenheimer";
import LinusPauling from "./components/categories/physics/LinusPauling";
import LiseMeitner from "./components/categories/physics/LiseMeitner";
import MarieCurie from "./components/categories/physics/MarieCurie";
import MaxBorn from "./components/categories/physics/MaxBorn";
import MurrayGellMann from "./components/categories/physics/MurrayGellMann";
import NielsBohr from "./components/categories/physics/NielsBohr";
import PaulDirac from "./components/categories/physics/PaulDirac";
import PaulSamuelson from "./components/categories/physics/PaulSamuelson";
import RichardFeynman from "./components/categories/physics/RichardFeynman";
import RogerPenrose from "./components/categories/physics/RogerPenrose";
import SrinivasaRamanujan from "./components/categories/physics/SrinivasaRamanujan";
import WolfgangPauli from "./components/categories/physics/WolfgangPauli";

function App() {
  return (
    <Router>
      <Search />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/physics" element={<PhysicsCategory />} /> */}
        {/* <Route path="/chemistry" element={<ChemistryCategory />} /> */}
        {/* <Route path="/mathematics" element={<MathematicsCategory />} /> */}
        {/* <Route path="/geology" element={<GeologyCategory />} /> */}
        {/* <Route path="/computer-science" element={<ComputerScienceCategory />} /> */}
        <Route path="/ada-lovelace" element={<AdaLovelace />} />
        <Route path="/alan-turing" element={<AlanTuring />} />
        <Route path="/barbara-mcclintock" element={<BarbaraMcClintock />} />
        <Route path="/enrico-fermi" element={<EnricoFermi />} />
        <Route path="/ernest-rutherford" element={<ErnestRutherford />} />
        <Route path="/erwin-schroedinger" element={<ErwinSchrödinger />} />
        <Route path="/gerty-cori" element={<GertyCori />} />
        <Route path="/isaac-newton" element={<IsaacNewton />} />
        <Route path="/james-clerk-maxwell" element={<JamesClerkMaxwell />} />
        <Route path="/jocelyn-bell-burnell" element={<JocelynBellBurnell />} />
        <Route path="/john-bardeen" element={<JohnBardeen />} />
        <Route path="/j-robert-oppenheimer" element={<JRobertOppenheimer />} />
        <Route path="/linus-pauling" element={<LinusPauling />} />
        <Route path="/lise-meitner" element={<LiseMeitner />} />
        <Route path="/marie-curie" element={<MarieCurie />} />
        <Route path="/max-born" element={<MaxBorn />} />
        <Route path="/murray-gell-mann" element={<MurrayGellMann />} />
        <Route path="/niels-bohr" element={<NielsBohr />} />
        <Route path="/paul-dirac" element={<PaulDirac />} />
        <Route path="/paul-samuelson" element={<PaulSamuelson />} />
        <Route path="/richard-feynman" element={<RichardFeynman />} />
        <Route path="/roger-penrose" element={<RogerPenrose />} />
        <Route path="/srinivasa-ramanujan" element={<SrinivasaRamanujan />} />
        <Route path="/wolfgang-pauli" element={<WolfgangPauli />} />
      </Routes>
    </Router>
  );
}

export default App;
