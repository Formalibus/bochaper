import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./bochaper/Navbar";
import Footer from "./bochaper/Footer";
import Main from "./pages/Main";
import Tabs from "./pages/Tabs";
import Music from "./pages/Music";

function App() {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/tabs">
            <Tabs />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
