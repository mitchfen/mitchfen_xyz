import AnimatedSocials from "./components/AnimatedSocials";
import Projects from "./components/Projects";
import Files from "./components/Files";

function App() {
  return (
    <>
      <div className="flex-parent">
        <div className="left-column">
          <h2>Mitchell Fenner</h2>
          <hr />
          <AnimatedSocials />
          <br />
          <Projects />
          <br />
          <Files />
        </div>
      </div>
    </>
  );
}

export default App;
