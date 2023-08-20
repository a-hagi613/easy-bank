import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbars from "./components/Navbars";
import Heros from "./components/Heros";
import Section from "./components/Section";
import Articles from "./components/Articles";
import Footers from "./components/Footers";

function App() {
  return (
    <Container fluid className="px-3">
      <br />
      <Navbars data-testid="navbars" />
      <br />
      <br />
      <Heros data-testid="heros" />
      <br />
      <br />
      <Section data-testid="section" />
      <br />
      <Articles data-testid="articles" />
      <br />
      <br />
      <br />
      <br />
      <Footers data-testid="footers" />
    </Container>
  );
}

export default App;