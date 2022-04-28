import React, {Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './components/messages';
import Messages from './components/messages';
import WriteMessage from './components/writeMessage';
import ViewMessage from './components/viewMessage';
import NotFound from './components/notFound';
import LoginDemo from './components/loginDemo';
import NavBar from './components/navBar';
import './App.css';


class App extends Component {
  render() { 
    return (
      <React.Fragment>
      <NavBar/>
      <main className='container'>
      <Switch>
      <Route path="/login" component={LoginDemo}></Route>
      <Route path="/messages" component={Messages}></Route>
      <Route path="/writeMessages" component={ WriteMessage }></Route>
      <Route path="/viewMessage" component={ViewMessage}></Route>
      <Route path="/notFound" component={NotFound }></Route>
      <Redirect from="/" exact to="/messages"/>
      <Redirect to="/notFound" />
      </Switch>
   
    </main>
    
    </React.Fragment>);
  }
}
 
export default App;


