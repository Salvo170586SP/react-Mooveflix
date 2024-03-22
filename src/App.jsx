import FetchMovie from "./components/FetchMovie";
import"./App.css"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="app">
      <Navbar />
      <FetchMovie />
    </div>
  );
}

export default App;
