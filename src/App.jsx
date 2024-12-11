import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BegginerGuitar from "./pages/BegginerGuitar";
import FretboardTheory from "./pages/FretboardTheory";
import IntermediateGuitar from "./pages/IntermediateGuitar";
import EarTrainer from "./pages/EarTrainer";
import FretboardSimulator from "./pages/FretboardSimulator";
import ChordChartCreator from "./pages/ChordChartCreator";
import Metronome from "./pages/Metronome";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="BegginerGuitar" element={<BegginerGuitar />} />
          <Route path="FretboardTheory" element={<FretboardTheory />} />
          <Route path="IntermediateGuitar" element={<IntermediateGuitar />} />
          <Route path="EarTrainer" element={<EarTrainer />} />
          <Route path="FretboardSimulator" element={<FretboardSimulator />} />
          <Route path="ChordChartCreator" element={<ChordChartCreator />} />
          <Route path="Metronome" element={<Metronome />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
