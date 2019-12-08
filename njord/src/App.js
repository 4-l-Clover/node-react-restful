import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

let FirstPage = React.lazy(() => import('./login'));

if (localStorage.getItem('role')) {
  FirstPage = React.lazy(() => import('./layout'));
}

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="First Page" render={props => <FirstPage {...props}/>} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
