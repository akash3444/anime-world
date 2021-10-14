import { Switch, Route } from 'react-router-dom'
import Anime from './pages/anime';

import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Character from './pages/character';
import Search from './pages/Search/search';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/anime/:animeId" component={Anime} />
        <Route exact path="/characters/:characterId" component={Character} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  );
};

export default App;
