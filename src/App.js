import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <>      
      <div className="App">

      </div>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/list" element={ <List/>} />
      </Routes>
    </>
  );
}

export default App;
