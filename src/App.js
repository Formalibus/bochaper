import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./bochaper/Navbar";
import Footer from "./bochaper/Footer";
import Main from "./pages/Main";
import Tabs from "./pages/Tabs";
import Music from "./pages/Music";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/tabs">
          <Tabs></Tabs>
        </Route>
        <Route path="/music">
          <Music></Music>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
