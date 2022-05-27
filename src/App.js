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
          <Dictionary />
        </main>
        <footer className="text-center footer">
          <small>Coded by Itzel Gil</small>
        </footer>
      </div>
    </div>
  );
}
