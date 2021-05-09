import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import './assets/style/style.scss'
import { Switch, Route, Redirect } from 'react-router-dom'
import Appbar from "./containers/Appbar";
import Loginpage from "./pages/Loginpage/Loginpage";
import AddProduct from "./pages/AddProducts/AddProduct";
import { useState } from "react";
import Profile from "./pages/Profile/Profile";
import SearchResult from "./pages/SearchResult";
import Registration from "./pages/Registration/Registration";
import Error from "./pages/Error/Error";
function App() {

  const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))

  return (
    <div className="App">
      
      <Appbar token={token} />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route path="/product/:id" component={Product} />

        <Route path="/new" component={AddProduct} />
        <Route path="/registration" component={Registration} />
        <Route path="/search/:city/:citycategory/:item" component={SearchResult} />
        
        <Route  path="/profile">
          {token ? (
            <Profile setToken={setToken} token={token} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login">
          {token ? (
            <Redirect to="/" />
          ) : (
            <Loginpage setToken={setToken} token={token} />
          )}
        </Route>
        <Route component={Error} path="*"/>
      </Switch>
    </div>
  );
}

export default App;
