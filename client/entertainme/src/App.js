import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'
import EditMovie from './pages/EditMovie'
import MovieDetail from './pages/DetailPage'
import Favourite from './pages/Favourites'
import { ApolloProvider } from '@apollo/client/react'
import client from './graphql/config'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
      <div className="App">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-dark" style={{margin: 0}}>
            <Link to="/" className="breadcrumb-item">Home</Link>
            <Link to="/add" className="breadcrumb-item">Add Movie</Link>
            <Link to="/favourite" className="breadcrumb-item">Favourites</Link>
          </ol>
        </nav>
        <div className="body">
        <Switch>
          <Route path="/edit/:id">
            <EditMovie></EditMovie>
          </Route>
          <Route path="/detail/:id">
            <MovieDetail></MovieDetail>
          </Route>
          <Route path="/add">
            <AddMovie></AddMovie>
          </Route>
          <Route path="/favourite">
            <Favourite></Favourite>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        </div>
      </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
