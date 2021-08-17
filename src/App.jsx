import "./App.css";
import {Helmet} from "react-helmet";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Helmet> 
        <title>Tools</title>
      </Helmet>
      <Content />
    </div>
  );
}

export default App;
