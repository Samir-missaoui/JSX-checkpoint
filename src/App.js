import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import mybestImage from "./téléchargement (1).png";
import mybestvideo from "./CSSFlexbox.mp4";

function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "solid",
          borderWidth: 6,
          borderColor: "black",
          bordermaxwidth: "100vw",
        }}
      >
        <h1 className="title red">
          Your name here <br />
        </h1>
        <img src="/téléchargement.png" alt="myimage" />
        <br />
        <img src={mybestImage} alt="myImage" />
      </div>
      <video src={mybestvideo} width="320" height="240" controls="controls" />
    </div>
  );
}

export default App;
