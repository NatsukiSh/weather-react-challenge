import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather defaultCity="Hattingen" />
          </div>
        </div>
        <footer className="text-center">
          <a
            href="https://github.com/NatsukiSh/weather-react-challenge"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Open-source code,
          </a>{" "}
          by
          <a
            href="https://www.linkedin.com/in/natsuki-shuko-81890a1b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9zoyVn2aSdeGDCR4Hz6LIw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            {" "}
            Natsuki Shuko
          </a>{" "}
          on
          <a
            href="https://funny-beignet-7cc5ec.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
