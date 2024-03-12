import Home from "./pages/bloghome/BlogHome";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Blog from "./components/Blog";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route> 
          <Route path="/blog" exact element={<Blog/>}></Route> 
        </Routes>
      </Router>
  );
}

export default App;