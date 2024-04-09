import "./App.css";

import { Route, Switch } from "react-router-dom";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/single-post/SinglePost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Posts} path="/posts" exact />
        <Route component={SinglePost} path="/posts/:postId" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
