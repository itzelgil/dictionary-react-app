import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center footer">
          <small>
            <a
              href="https://github.com/itzelgil/dictionary-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open source-code
            </a>{" "}
            by{" "}
            <a
              href="https://ubiquitous-gnome-f8865b.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Itzel Gil
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
