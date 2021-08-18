import "./App.css";
import {Helmet} from "react-helmet";
import Content from "./components/Content";
import Navigation from "./components/Navigation"

function App() {
  return (
    <div>
      <Helmet> 
        <title>Tools</title>
      </Helmet>
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
