import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Link to="/" className="breadcrumb-item">Home</Link>
          <Link to="/add" className="breadcrumb-item">Add Movie</Link>
        </ol>
      </nav>
      <div className="body">
      <Switch>
        <Route path="/add">
          <AddMovie></AddMovie>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
