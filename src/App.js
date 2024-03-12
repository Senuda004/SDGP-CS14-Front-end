import Home from "./pages/bloghome/BlogHome";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Blog from "./components/Blog";
import Single from './pages/single/Single'

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route> 
          <Route path="/blog" exact element={<Blog/>}></Route> 
          <Route path="/post/:postId" element={<Single />} ></Route> 
        </Routes>
      </Router>
  );
}

export default App;