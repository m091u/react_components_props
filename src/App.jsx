// App.jsx

import "./App.css";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Ira" />
      <Greeting firstName="Moe" />
      <Greeting firstName="Poe" />

      <StudentList>
        <StudentCard
          name="Eva"
          week={7}
          info={{ city: "BCN", course: "WEB" }}
        />
        <StudentCard
          name="Mat"
          week={8}
          info={{ city: "MIA", course: "DATA" }}
        />
      </StudentList>

      <hr />
      <ReactPlayer
        url="https://vimeo.com/channels/top/22439234"
        playing
        controls
        volume="0.5"
      />
    </div>
  );
}

export default App;
