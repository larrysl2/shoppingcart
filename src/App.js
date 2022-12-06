import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Homepage from "./pages/homepage";
import Catalog from "./pages/catalog";
function App() {
  return (
   <Router>
      <Routes>
        <Route path= "/" element = {<Homepage/>}/>
        <Route path= "/Catalog" element = {<Catalog/>}/>
      </Routes>
   </Router>
  );
}

export default App;
