import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import Header from './components/Header/Header';
import Categories from './components/Categories/Categorie';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Error404 from './components/Error404/Error404';

function App() {
   return (
      <>
         <Header />
         <Image src="http://store.picbg.net/pubpic/46/C5/4241166cd1c646c5.jpg" fluid />
         <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/categories/:category" component={Categories} />
            <Route path="/auth/login" exact component={Login}/>
            <Route path="/auth/register" exact component={Register}/>
            <Route component={Error404} />
         </Switch>
      </>
   );
}

export default App;
