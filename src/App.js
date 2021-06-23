import Navbar from "./components/Navbar";
import Upper from "./components/Upper";
import IntroCarousel from "./components/IntroCarousel";
import LockCarousel from "./components/LockCarousel";
import "./App.css";
import Bottom from "./components/Bottom";

function App() {
  return (
    <>
      <Navbar />
      <Upper />
      <IntroCarousel />
      <LockCarousel />
      <LockCarousel />
      <LockCarousel />
      <LockCarousel />
      <LockCarousel />
      <Bottom />
    </>
  );
}

export default App;
