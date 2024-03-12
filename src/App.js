import Home from "./pages/bloghome/BlogHome";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route> 
        </Routes>
      </Router>
  );
}

export default App;