import './App.css';
import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import MoviePage from './pages/movie';
import MovieSinglePage from './pages/movie/single';
import { useGlobal } from './hooks';

function App() {

  const [state, dispatch] = useGlobal();

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/:id">
            <MovieSinglePage />
          </Route>
          <Route path="/" exact>
            <MoviePage state={state} dispatch={dispatch} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
