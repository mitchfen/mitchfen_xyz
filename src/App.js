import Welcome from "./components/Welcome";
//import AnimatedSocials from "./components/AnimatedSocials";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import Files from "./components/Files";

function App() {
  return (
    <>
      <div className="flex-parent">
        <div className="left-column">
          <Welcome />
          <br />
          <Socials />
          <br />
        </div>
        <div className="right-column">
          <Projects />
          <br />
          <Files />
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
