import { MemoryRouter as Router } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen min-h-screen min-w-full">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
