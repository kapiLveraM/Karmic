import "./App.css";
import KarmicLabNav from "./components/KarmicLabNav";
import "bootstrap/dist/css/bootstrap.min.css";
import WeAreBelievers from "./components/WeAreBelievers";
import UpcomingProjects from "./components/UpcomingProjects";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <div className="min_vh_100 d-flex flex-column">
        <KarmicLabNav />
        <WeAreBelievers />
      </div>
      <UpcomingProjects />
      <Services />
      <Projects />
      <About />
    </>
  );
}

export default App;
